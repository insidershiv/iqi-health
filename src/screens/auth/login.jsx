import React from 'react';
import { useForm } from "react-hook-form";
import ThemeInput from '../../components/form-elements/theme-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../../utils/validation';


const Home = () => {

    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(LoginValidation)
    }
);
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ThemeInput name="email" register={register} placeholder="email" errors={errors} isRequired/>
        <ThemeInput name="password" register={register} placeholder="pass" errors={errors} isRequired/>
        <input type="submit" />
      </form>
    );
}

export default Home;
