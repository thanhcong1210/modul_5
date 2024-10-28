import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Health() {

    const [form, setForm] = useState({
        name: '',
        cmnd: '',
        dob: '',
        gender: '',
        country: '',
        company: '',
        working: '',
        insurance: false,
        city: '',
        district: '',
        ward: '',
        house: '',
        phone: '',
        email: '',
        description: '',
        token: [],
        contact: []
    });

    const SEX_LIST = [
        {label: 'Nam', value: 'male'},
        {label: 'Nữ', value: 'female'}
    ];

    const TOKEN = [
        {label: 'Sốt', value: 'Sốt'},
        {label: 'Ho', value: 'Ho'},
        {label: 'Khó thở', value: 'Khó thở'},
        {label: 'Viêm phổi', value: 'Viêm phổi'},
        {label: 'Đau họng', value: 'Đau họng'},
        {label: 'Mệt mỏi', value: 'Mệt mỏi'}
    ]

    const CONTACT = [
        {label: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19', value: 'Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19'},
        {label: 'Người từ nước có bệnh COVID-19', value: 'Người từ nước có bệnh COVID-19'},
        {
            label: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi',
            value: 'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi'
        }
    ]

    const objectValid = {
        name: Yup.string().required("Tên không được để trống"),
        cmnd: Yup.number().required("CMND không được để trống"),
        dob: Yup.number().required("Không được để trống ngày sinh").min(1900, "Năm sinh phải lớn hơn 1900"),
        country: Yup.string().required("Quốc gia không được để trống"),
        city: Yup.string().required("Tỉnh thành không được để trống"),
        district: Yup.string().required("Quận huyện không được để trống"),
        ward: Yup.string().required("Phường xã không được để trống"),
        house: Yup.string().required("Số nhà cụ thể không được để trống"),
        phone: Yup.string().required("Số điện thoại không được để trống"),
        email: Yup.string().required("Email không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng")
    };

    const saveHealth = (values, {resetForm}) => {
        setForm({...form, resetForm});
        toast.success('Thêm mới thành công')
        resetForm();
    }

    return (
        <div className="container mt-5">
            <Formik
                initialValues={form}
                onSubmit={saveHealth}
                validationSchema={Yup.object(objectValid)}
            >
                <Form className="border p-5 rounded shadow bg-white">
                    <h2 className="text-center mb-5">Tờ khai y tế</h2>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Họ tên</label>
                            <Field name="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Số hộ chiếu/CMND</label>
                            <Field name="cmnd" className="form-control" />
                            <ErrorMessage name="cmnd" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Năm sinh</label>
                            <Field name="dob" type="number" className="form-control" />
                            <ErrorMessage name="dob" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Giới tính</label>
                            <div className="d-flex gap-3">
                                {SEX_LIST.map((sex) => (
                                    <div key={sex.value} className="form-check">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value={sex.value}
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label ms-2">{sex.label}</label>
                                    </div>
                                ))}
                            </div>
                            <ErrorMessage name="gender" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Quốc tịch</label>
                            <Field name="country" className="form-control" />
                            <ErrorMessage name="country" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Công ty làm việc</label>
                            <Field name="company" className="form-control" />
                            <ErrorMessage name="company" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Bộ phận làm việc</label>
                            <Field name="working" className="form-control" />
                            <ErrorMessage name="working" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-6 form-check">
                            <Field name="insurance" type="checkbox" className="form-check-input" />
                            <label className="form-check-label ms-2">Có thẻ bảo hiểm y tế</label>
                            <ErrorMessage name="insurance" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <h4 className="mt-5 mb-4">Địa chỉ liên lạc tại Việt Nam</h4>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Tỉnh thành</label>
                            <Field name="city" className="form-control" />
                            <ErrorMessage name="city" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Quận / huyện</label>
                            <Field name="district" className="form-control" />
                            <ErrorMessage name="district" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Phường / xã</label>
                            <Field name="ward" className="form-control" />
                            <ErrorMessage name="ward" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Số nhà, phố, tổ dân phố / thôn / đội</label>
                        <Field name="house" className="form-control" />
                        <ErrorMessage name="house" component="div" className="text-danger mt-1" />
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Điện thoại</label>
                            <Field name="phone" className="form-control" />
                            <ErrorMessage name="phone" component="div" className="text-danger mt-1" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <Field name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger mt-1" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Quốc gia / vùng lãnh thổ đã đến trong 14 ngày qua</h5>
                        <Field name="descrip" as="textarea" className="form-control" />
                    </div>

                    <div className="mb-4">
                        <h5>Các dấu hiệu xuất hiện trong 14 ngày qua</h5>
                        {TOKEN.map((item) => (
                            <div key={item.value} className="form-check">
                                <Field
                                    type="checkbox"
                                    name="token"
                                    value={item.value}
                                    className="form-check-input"
                                />
                                <label className="form-check-label ms-2">{item.label}</label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-5">
                        <h5>Tiếp xúc trong 14 ngày qua</h5>
                        {CONTACT.map((item) => (
                            <div key={item.value} className="form-check">
                                <Field
                                    type="checkbox"
                                    name="contact"
                                    value={item.value}
                                    className="form-check-input"
                                />
                                <label className="form-check-label ms-2">{item.label}</label>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </Form>
            </Formik>

            {form && (
                <div className="mt-5 card shadow">
                    <div className="card-body">
                        <h2 className="card-title">Thông tin đã lưu</h2>
                        <p><strong>Họ tên:</strong> {form.name}</p>
                        <p><strong>Số hộ chiếu/CMND:</strong> {form.cmnd}</p>
                        <p><strong>Năm sinh:</strong> {form.dob}</p>
                        <p><strong>Giới tính:</strong> {form.gender}</p>
                        <p><strong>Quốc tịch:</strong> {form.country}</p>
                        <p><strong>Công ty làm việc:</strong> {form.company}</p>
                        <p><strong>Bộ phận làm việc:</strong> {form.working}</p>
                        <p><strong>Có thẻ bảo hiểm y tế:</strong> {form.insurance ? "Có" : "Không"}</p>
                        <p><strong>Địa chỉ:</strong> {`${form.city}, ${form.district}, ${form.ward}, ${form.house}`}</p>
                        <p><strong>Điện thoại:</strong> {form.phone}</p>
                        <p><strong>Email:</strong> {form.email}</p>
                        <p><strong>Mô tả quốc gia / vùng lãnh thổ:</strong> {form.descrip}</p>
                        <p><strong>Dấu hiệu:</strong> {form.token ? form.token.join(", ") : "Không có"}</p>
                        <p><strong>Tiếp xúc:</strong> {form.contact ? form.contact.join(", ") : "Không có"}</p>
                    </div>
                </div>
            )}
        </div>
    );

}