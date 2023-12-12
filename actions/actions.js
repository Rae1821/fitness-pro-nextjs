" use server"

import { connectToDB } from '@utils/database';
import { revalidatePath } from 'next/cache';

export const addUserInfo = async (formData) => {
    const weight = formData.get("weight");

    try {
        await connectToDB();

        const newUserInfo = new UserInfo({
            creator, userId,
            date: date,
            weight: weight,
            waistMeasurement: waistMeasurement,
            hipMeasurement: hipMeasurement,
            bustMeasurement: bustMeasurement,
            notes: notes,
        })

        await newUserInfo.save();

        revalidatePath("/profile");
    } catch(error) {
        return {
            error: error,
        }
    }



}