import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
import {carService} from "../services/carService";

const CarForm = ({trigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
        }
    );
    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) =>{
        await carService.create(car);
        trigger()
        reset()
    }

    const update = async (car) =>{
        await carService.updateById(carForUpdate.id, car);
        trigger();
        setCarForUpdate(null);
        reset()
    }
    return (
        <>
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    {errors.brand && <div>{errors.brand.message}</div>}
    {errors.price && <div>{errors.price.message}</div>}
    {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};