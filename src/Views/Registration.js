import './Registration.css'
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { postAddNewUser } from '../services/userServices'

const Registration = (props) => {

    const navigate = useNavigate();

    const schema = yup.object({
        name: yup.string()
            .required("Please input User Name")
            .matches(/^[A-z0-9_-]{2,15}$/, "Eg: Thomas"),

        email: yup.string()
            .email("Eg: example@gmail.com")
            .required("Please input Email"),

        password: yup.string()
            .required("Please input password")
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Eg: P@ssword1'),

    }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',

    });

    const handleAddNewUser = async (data) => {
        if (data.password === data.confirmPassword) {
            let res = await postAddNewUser({
                email: data.email,
                password: data.password,
                name: data.name
            })
            if (res && res?.status === 201) {
                navigate("/login");
            }
        }

    };

    return (
        <div className='registrations-container'>
            <div className='registrations-banner'></div>
            <div className='registrations-content'>
                <div className='registration-title'>
                    Get's things done with TODO
                </div>
                <div className='registration-title-explain'>
                    Let's help you meet up your tasks
                </div>
            </div>
            <div className='input-infor'>
                <Form
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={handleSubmit(handleAddNewUser)}
                >
                    <Form.Item >
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <Input {...field}
                                status={errors.name ? "error" : ""}
                                placeholder="Enter your full name" />}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Form.Item>
                    <Form.Item >
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Input {...field}
                                status={errors.email ? "error" : ""}
                                placeholder="Enter your email" />}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Item>

                    <Form.Item >
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <Input.Password {...field}
                                status={errors.username ? "error" : ""}
                                placeholder="Enter password" />}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Item>
                    <Form.Item >
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => <Input.Password {...field}
                                placeholder="Confirm Password" />}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Button className='btn-register' htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='footer-registration'>
                <div className='sign-in'>
                    Already have an account ?
                    &nbsp;
                    <Link to='/login'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}
export default Registration