/* =====================================================
   STORAGE
===================================================== */

const BOOKING_KEY = "footballBookings";


/* =====================================================
   LẤY ĐƠN
===================================================== */

function getBookings() {

    try {

        return JSON.parse(
            localStorage.getItem(BOOKING_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


/* =====================================================
   LƯU ĐƠN
===================================================== */

function saveBookings(bookings) {

    localStorage.setItem(
        BOOKING_KEY,
        JSON.stringify(bookings)
    );

}


/* =====================================================
   CHỐNG HTML
===================================================== */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/[&<>"']/g, function (char) {

            return {

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"

            }[char];

        });

}


/* =====================================================
   TÊN TRẠNG THÁI
===================================================== */

function statusText(status) {

    if (status === "confirmed") {

        return "Đã xác nhận";

    }


    if (status === "cancelled") {

        return "Đã hủy";

    }


    return "Chờ xác nhận";

}


/* =====================================================
   HIỂN THỊ
===================================================== */

function render() {

    const bookings =
        getBookings();


    const searchInput =
        document.getElementById(
            "search"
        );


    const statusFilter =
        document.getElementById(
            "statusFilter"
        );


    const keyword =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const status =
        statusFilter
            ? statusFilter.value
            : "";


    /* =========================
       THỐNG KÊ
    ========================== */

    const total =
        bookings.length;


    const pending =
        bookings.filter(
            booking =>
                booking.status === "pending"
        ).length;


    const confirmed =
        bookings.filter(
            booking =>
                booking.status === "confirmed"
        ).length;


    const cancelled =
        bookings.filter(
            booking =>
                booking.status === "cancelled"
        ).length;


    document.getElementById(
        "total"
    ).textContent = total;


    document.getElementById(
        "pending"
    ).textContent = pending;


    document.getElementById(
        "confirmed"
    ).textContent = confirmed;


    document.getElementById(
        "cancelled"
    ).textContent = cancelled;


    /* =========================
       LỌC
    ========================== */

    const filtered =
        bookings.filter(
            function (booking) {

                const searchText = [

                    booking.id,

                    booking.customer,

                    booking.phone,

                    booking.field,

                    booking.date,

                    booking.time,

                    booking.note

                ]
                    .join(" ")
                    .toLowerCase();


                const matchSearch =
                    !keyword ||
                    searchText.includes(
                        keyword
                    );


                const matchStatus =
                    !status ||
                    booking.status === status;


                return (
                    matchSearch &&
                    matchStatus
                );

            }
        );


    /* =========================
       TABLE
    ========================== */

    const table =
        document.getElementById(
            "bookingTable"
        );


    table.innerHTML = "";


    filtered.forEach(
        function (booking) {

            table.insertAdjacentHTML(

                "beforeend",

                `

                <tr>

                    <!-- MÃ ĐƠN -->

                    <td>

                        <span class="booking-id">

                            ${escapeHtml(
                                booking.id
                            )}

                        </span>


                        <span class="created-time">

                            ${escapeHtml(
                                booking.createdAt
                            )}

                        </span>

                    </td>


                    <!-- KHÁCH -->

                    <td>

                        <strong>

                            ${escapeHtml(
                                booking.customer
                            )}

                        </strong>

                    </td>


                    <!-- PHONE -->

                    <td>

                        ${escapeHtml(
                            booking.phone
                        )}

                    </td>


                    <!-- SÂN -->

                    <td>

                        ${escapeHtml(
                            booking.field
                        )}

                    </td>


                    <!-- NGÀY -->

                    <td>

                        ${escapeHtml(
                            booking.date
                        )}

                    </td>


                    <!-- GIỜ -->

                    <td>

                        ${escapeHtml(
                            booking.time
                        )}

                    </td>


                    <!-- GHI CHÚ -->

                    <td>

                        ${escapeHtml(
                            booking.note || "-"
                        )}

                    </td>


                    <!-- STATUS -->

                    <td>

                        <span
                            class="status ${escapeHtml(
                                booking.status
                            )}">

                            ${statusText(
                                booking.status
                            )}

                        </span>

                    </td>


                    <!-- ACTION -->

                    <td>

                        <div class="actions">

                            ${
                                booking.status !== "confirmed"

                                    ? `

                                    <button
                                        class="confirm-btn"
                                        onclick="changeStatus(
                                            '${escapeHtml(booking.id)}',
                                            'confirmed'
                                        )">

                                        ✓ Xác nhận

                                    </button>

                                    `

                                    : ""

                            }


                            ${
                                booking.status !== "cancelled"

                                    ? `

                                    <button
                                        class="cancel-btn"
                                        onclick="changeStatus(
                                            '${escapeHtml(booking.id)}',
                                            'cancelled'
                                        )">

                                        ✕ Hủy

                                    </button>

                                    `

                                    : ""

                            }


                            <button
                                class="delete-btn"
                                onclick="deleteBooking(
                                    '${escapeHtml(booking.id)}'
                                )">

                                🗑 Xóa

                            </button>

                        </div>

                    </td>

                </tr>

                `

            );

        }
    );


    /* =========================
       EMPTY
    ========================== */

    const empty =
        document.getElementById(
            "emptyAdmin"
        );


    if (filtered.length === 0) {

        empty.style.display =
            "block";

    } else {

        empty.style.display =
            "none";

    }

}


/* =====================================================
   ĐỔI TRẠNG THÁI
===================================================== */

function changeStatus(
    id,
    newStatus
) {

    const bookings =
        getBookings();


    const booking =
        bookings.find(
            item => item.id === id
        );


    if (!booking) {

        return;

    }


    booking.status =
        newStatus;


    saveBookings(
        bookings
    );


    render();

}


/* =====================================================
   XÓA MỘT ĐƠN
===================================================== */

function deleteBooking(id) {

    const answer =
        confirm(
            "Bạn có chắc muốn xóa đơn đặt sân này?"
        );


    if (!answer) {

        return;

    }


    const bookings =
        getBookings();


    const newBookings =
        bookings.filter(
            booking =>
                booking.id !== id
        );


    saveBookings(
        newBookings
    );


    render();

}


/* =====================================================
   XÓA TẤT CẢ
===================================================== */

function clearAll() {

    const bookings =
        getBookings();


    if (bookings.length === 0) {

        alert(
            "Hiện chưa có đơn nào để xóa."
        );

        return;

    }


    const answer =
        confirm(
            "Bạn có chắc muốn xóa toàn bộ đơn đặt sân?"
        );


    if (!answer) {

        return;

    }


    localStorage.removeItem(
        BOOKING_KEY
    );


    render();

}


/* =====================================================
   TÌM KIẾM
===================================================== */

const search =
    document.getElementById(
        "search"
    );


if (search) {

    search.addEventListener(
        "input",
        render
    );

}


/* =====================================================
   LỌC TRẠNG THÁI
===================================================== */

const statusFilter =
    document.getElementById(
        "statusFilter"
    );


if (statusFilter) {

    statusFilter.addEventListener(
        "change",
        render
    );

}


/* =====================================================
   TỰ CẬP NHẬT KHI TAB KHÁC THAY ĐỔI
===================================================== */

window.addEventListener(
    "storage",
    function () {

        render();

    }
);


/* =====================================================
   KHỞI ĐỘNG
===================================================== */

render();