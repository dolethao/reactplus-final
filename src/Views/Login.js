import './Login.css'
import { Button, Form, Input } from 'antd';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();

    const schema = yup.object({

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

    const handleLogin = (data) => {
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <div className='login-banner'></div>
            <div className='login-title'>
                Welcome back
                <br />
                to
                <br />
                <span style={{ fontSize: '22px' }}>OUR REMINDER</span>
            </div>
            <div className='form-login'>
                <Form
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={handleSubmit(handleLogin)}
                >
                    <Form.Item >
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Input {...field}
                                status={errors.email ? "error" : ""}
                                placeholder="Enter your email" />}

                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </Form.Item>
                    <Form.Item >
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <Input.Password {...field}
                                status={errors.password ? "error" : ""}
                                placeholder="Enter your password" />}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Button className='btn-login' htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='footer-login'>
                Don't have an account ?
                &nbsp;
                <Link to='/registration'>Sign Up</Link>
            </div>
        </div>
    )
}
export default Login