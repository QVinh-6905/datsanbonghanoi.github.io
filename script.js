/* =====================================================
   DỮ LIỆU SÂN BÓNG
===================================================== */

const fields = [

    {
        name: "Sân Bóng Mini Mỹ Đình",
        area: "Nam Từ Liêm",
        ward: "Mỹ Đình 2",
        address: "1 Lê Đức Thọ",
        type: "7",
        price: "300.000 - 700.000đ/giờ",
        rating: "4.4"
    },

    {
        name: "Sân Bóng Hải Đăng",
        area: "Nam Từ Liêm",
        ward: "Trung Văn",
        address: "56 Tố Hữu",
        type: "7",
        price: "300.000 - 650.000đ/giờ",
        rating: "4.3"
    },

    {
        name: "Sân Bóng Thành Đồng",
        area: "Cầu Giấy",
        ward: "Nam Trung Yên",
        address: "KĐT Nam Trung Yên",
        type: "7",
        price: "300.000 - 600.000đ/giờ",
        rating: "4.3"
    },

    {
        name: "Sân Bóng Đá Hoàng Cầu",
        area: "Đống Đa",
        ward: "Ô Chợ Dừa",
        address: "69 Phố Hoàng Cầu",
        type: "7",
        price: "300.000 - 900.000đ/giờ",
        rating: "4.5"
    },

    {
        name: "Sân BCA Thanh Xuân",
        area: "Thanh Xuân",
        ward: "Nguyễn Xiển",
        address: "369 Cầu Dậu",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Bóng Viettel Thanh Xuân",
        area: "Thanh Xuân",
        ward: "Khương Mai",
        address: "Đường Lê Trọng Tấn",
        type: "7",
        price: "300.000 - 650.000đ/giờ",
        rating: "4.3"
    },

    {
        name: "Sân Khương Hạ",
        area: "Thanh Xuân",
        ward: "Khương Đình",
        address: "Phố Khương Hạ",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Big C Hà Đông",
        area: "Hà Đông",
        ward: "Văn Phú",
        address: "Khu đô thị Văn Phú",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.1"
    },

    {
        name: "Sân Cầu Đơ",
        area: "Hà Đông",
        ward: "Cầu Đơ",
        address: "46 Lê Hồng Phong",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân C500 An Ninh",
        area: "Hà Đông",
        ward: "Văn Quán",
        address: "Học viện An ninh",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Cường Quốc Hà Đông",
        area: "Hà Đông",
        ward: "Kiến Hưng",
        address: "Đa Sỹ",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân BKC Sport",
        area: "Hoàng Mai",
        ward: "Linh Đường",
        address: "58 Linh Đường",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Đại Từ",
        area: "Hoàng Mai",
        ward: "Đại Kim",
        address: "Đặng Xuân Bảng",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.1"
    },

    {
        name: "Sân Định Công",
        area: "Hoàng Mai",
        ward: "Định Công",
        address: "99 Định Công Hạ",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.1"
    },

    {
        name: "Sân CT10 Việt Hưng",
        area: "Long Biên",
        ward: "Việt Hưng",
        address: "Khu đô thị Việt Hưng",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Garden City Long Biên",
        area: "Long Biên",
        ward: "Thạch Bàn",
        address: "Khu Garden City",
        type: "7",
        price: "300.000 - 650.000đ/giờ",
        rating: "4.3"
    },

    {
        name: "Sân An Dương",
        area: "Tây Hồ",
        ward: "Yên Phụ",
        address: "76 An Dương",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.2"
    },

    {
        name: "Sân Công viên Tuổi Trẻ",
        area: "Hai Bà Trưng",
        ward: "Thanh Nhàn",
        address: "46 Thanh Nhàn",
        type: "7",
        price: "250.000 - 550.000đ/giờ",
        rating: "4.1"
    },

    {
        name: "Sân Đại học Bách Khoa A1",
        area: "Hai Bà Trưng",
        ward: "Lê Thanh Nghị",
        address: "Khu Lê Thanh Nghị",
        type: "7",
        price: "250.000 - 600.000đ/giờ",
        rating: "4.3"
    },

    {
        name: "Sân Đại học Thủy Lợi",
        area: "Đống Đa",
        ward: "Trung Liệt",
        address: "Ngõ 95 Chùa Bộc",
        type: "7",
        price: "350.000 - 1.200.000đ/giờ",
        rating: "4.5"
    }

];


/* =====================================================
   TÊN STORAGE
===================================================== */

const BOOKING_KEY = "footballBookings";


/* =====================================================
   LẤY DANH SÁCH ĐƠN
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
   LƯU DANH SÁCH ĐƠN
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
   HIỂN THỊ DANH SÁCH SÂN
===================================================== */

function renderFields(list = fields) {

    const grid =
        document.getElementById("fieldGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    list.forEach(function (field) {

        const index =
            fields.indexOf(field);


        grid.insertAdjacentHTML(
            "beforeend",

            `
            <article class="card">

                <div class="card-img">

                    ⚽

                    <span class="badge">
                        Sân ${escapeHtml(field.type)} người
                    </span>

                </div>


                <div class="card-body">

                    <h3>
                        ${escapeHtml(field.name)}
                    </h3>


                    <div class="meta">

                        📍
                        ${escapeHtml(field.address)},
                        ${escapeHtml(field.ward)},
                        ${escapeHtml(field.area)},
                        Hà Nội

                    </div>


                    <div class="rating">

                        ★ ${escapeHtml(field.rating)}/5

                    </div>


                    <div class="meta">

                        🌱 Cỏ nhân tạo
                        &nbsp; • &nbsp;
                        💡 Có đèn

                    </div>


                    <div class="price">

                        ${escapeHtml(field.price)}

                    </div>


                    <div class="card-actions">

                        <button
                            class="btn btn-outline"
                            onclick="viewField(${index})">

                            Chi tiết

                        </button>


                        <button
                            class="btn btn-primary"
                            onclick="openBooking('${escapeQuotes(field.name)}')">

                            Đặt sân

                        </button>

                    </div>

                </div>

            </article>
            `
        );

    });


    const count =
        document.getElementById("count");

    if (count) {

        count.textContent =
            list.length + " sân";

    }


    const empty =
        document.getElementById("empty");

    if (empty) {

        empty.style.display =
            list.length === 0
                ? "block"
                : "none";

    }

}


/* =====================================================
   ESCAPE DẤU NHÁY
===================================================== */

function escapeQuotes(value) {

    return String(value)
        .replaceAll("\\", "\\\\")
        .replaceAll("'", "\\'");

}


/* =====================================================
   TÌM KIẾM / LỌC
===================================================== */

function filterFields() {

    const keyword =
        document
            .getElementById("keyword")
            .value
            .toLowerCase()
            .trim();


    const area =
        document
            .getElementById("area")
            .value;


    const type =
        document
            .getElementById("type")
            .value;


    const result =
        fields.filter(function (field) {

            const searchText =
                (
                    field.name +
                    " " +
                    field.address +
                    " " +
                    field.ward +
                    " " +
                    field.area
                ).toLowerCase();


            const matchKeyword =
                !keyword ||
                searchText.includes(keyword);


            const matchArea =
                !area ||
                field.area === area;


            const matchType =
                !type ||
                field.type === type;


            return (
                matchKeyword &&
                matchArea &&
                matchType
            );

        });


    renderFields(result);

}


/* =====================================================
   XEM CHI TIẾT SÂN
===================================================== */

function viewField(index) {

    const field =
        fields[index];


    if (!field) {
        return;
    }


    alert(

        "⚽ " + field.name +

        "\n\n" +

        "📍 Địa chỉ: " +
        field.address +
        ", " +
        field.ward +
        ", " +
        field.area +
        ", Hà Nội" +

        "\n\n" +

        "⚽ Loại sân: Sân " +
        field.type +
        " người" +

        "\n" +

        "⭐ Đánh giá: " +
        field.rating +
        "/5" +

        "\n\n" +

        "💰 Giá: " +
        field.price +

        "\n\n" +

        "🌱 Cỏ nhân tạo" +

        "\n" +

        "💡 Có hệ thống đèn"

    );

}


/* =====================================================
   MỞ FORM ĐẶT SÂN
===================================================== */

function openBooking(fieldName = "") {

    const modal =
        document.getElementById(
            "bookingModal"
        );


    const selectedField =
        document.getElementById(
            "selectedField"
        );


    const title =
        document.getElementById(
            "modalTitle"
        );


    const confirm =
        document.getElementById(
            "confirm"
        );


    if (!modal) {
        return;
    }


    modal.classList.add("show");


    selectedField.value =
        fieldName;


    if (fieldName) {

        title.textContent =
            "Đặt sân - " + fieldName;

    } else {

        title.textContent =
            "Đặt sân bóng";

    }


    confirm.style.display =
        "none";

}


/* =====================================================
   ĐÓNG FORM
===================================================== */

function closeBooking() {

    const modal =
        document.getElementById(
            "bookingModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   KIỂM TRA SỐ ĐIỆN THOẠI
===================================================== */

function isValidPhone(phone) {

    const regex =
        /^(0|\+84)[0-9]{9,10}$/;

    return regex.test(
        phone.replace(/\s/g, "")
    );

}


/* =====================================================
   GỬI ĐƠN ĐẶT SÂN
===================================================== */

function submitBooking(event) {

    event.preventDefault();


    const field =
        document
            .getElementById("selectedField")
            .value
            .trim();


    const customer =
        document
            .getElementById("customer")
            .value
            .trim();


    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    const date =
        document
            .getElementById("date")
            .value;


    const time =
        document
            .getElementById("time")
            .value;


    const note =
        document
            .getElementById("note")
            .value
            .trim();


    const confirmBox =
        document.getElementById(
            "confirm"
        );


    /* -------------------------
       KIỂM TRA
    ------------------------- */

    if (
        !field ||
        !customer ||
        !phone ||
        !date ||
        !time
    ) {

        showConfirm(
            "⚠️ Vui lòng nhập đầy đủ thông tin bắt buộc.",
            false
        );

        return;

    }


    if (!isValidPhone(phone)) {

        showConfirm(
            "⚠️ Số điện thoại không hợp lệ.",
            false
        );

        return;

    }


    /* -------------------------
       LẤY ĐƠN CŨ
    ------------------------- */

    const bookings =
        getBookings();


    /* -------------------------
       KIỂM TRA TRÙNG
    ------------------------- */

    const duplicated =
        bookings.some(function (booking) {

            return (

                booking.field === field &&

                booking.date === date &&

                booking.time === time &&

                booking.status !== "cancelled"

            );

        });


    if (duplicated) {

        showConfirm(
            "❌ Khung giờ này đã có người đặt. Vui lòng chọn giờ khác.",
            false
        );

        return;

    }


    /* -------------------------
       TẠO MÃ ĐƠN
    ------------------------- */

    const bookingId =
        "BK" +
        Date.now();


    /* -------------------------
       TẠO ĐƠN
    ------------------------- */

    const booking = {

        id: bookingId,

        field: field,

        customer: customer,

        phone: phone,

        date: date,

        time: time,

        note: note,

        createdAt:
            new Date().toLocaleString(
                "vi-VN"
            ),

        status: "pending"

    };


    /* -------------------------
       LƯU
    ------------------------- */

    bookings.unshift(
        booking
    );


    saveBookings(
        bookings
    );


    /* -------------------------
       THÔNG BÁO
    ------------------------- */

    confirmBox.innerHTML = `

        <b>
            ✅ Gửi yêu cầu thành công!
        </b>

        <br>

        Mã đơn:
        <b>${escapeHtml(bookingId)}</b>

        <br>

        Sân:
        <b>${escapeHtml(field)}</b>

        <br>

        Ngày:
        <b>${escapeHtml(date)}</b>

        <br>

        Giờ:
        <b>${escapeHtml(time)}</b>

        <br>

        Trạng thái:
        <b>Chờ xác nhận</b>

    `;


    confirmBox.style.display =
        "block";


    confirmBox.style.background =
        "#dcfce7";


    confirmBox.style.color =
        "#166534";


    /* -------------------------
       RESET FORM
    ------------------------- */

    document
        .getElementById("bookingForm")
        .reset();


    document
        .getElementById("selectedField")
        .value = field;

}


/* =====================================================
   HIỂN THỊ THÔNG BÁO
===================================================== */

function showConfirm(
    message,
    success = true
) {

    const box =
        document.getElementById(
            "confirm"
        );


    box.innerHTML =
        message;


    box.style.display =
        "block";


    if (success) {

        box.style.background =
            "#dcfce7";

        box.style.color =
            "#166534";

    } else {

        box.style.background =
            "#fee2e2";

        box.style.color =
            "#991b1b";

    }

}


/* =====================================================
   NGÀY NHỎ NHẤT
===================================================== */

function setMinDate() {

    const dateInput =
        document.getElementById(
            "date"
        );


    if (!dateInput) {
        return;
    }


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;

}


/* =====================================================
   CLICK RA NGOÀI MODAL
===================================================== */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "bookingModal"
            );


        if (
            event.target === modal
        ) {

            closeBooking();

        }

    }
);


/* =====================================================
   KHỞI ĐỘNG
===================================================== */

setMinDate();

renderFields();