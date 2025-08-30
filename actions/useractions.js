"use server"
import connectDb from "@/db/connectDB";
import User from "@/models/User";
import NotFound from "@/app/not-found";

export const fetchUser = async (username) => {
    await connectDb()
    const u = await User.findOne({username : username})
    const user = u.toObject({flattenObjectIds : true})
    return user
    // return 'hello'
}

export const updateProfile = async (data, oldUsername) => {
    await connectDb()
    let newData = Object.fromEntries(data)
    // console.log(newData)
    // let user = await User.findOne({email : data.email})
    if (oldUsername !== newData.username) {
        let user = await User.findOne({username : newData.username});
        // console.log(user)
        
        if (user) {
            return "This user already exists try another username"
        }

        await User.updateOne({email : newData.email}, newData)
        // alert('Updated')
        console.log('updated')
    }
        
    await User.updateOne({email : newData.email}, newData)
    // alert('Updated')
    console.log('updated')

}

export const searchCreator = async (data) => {
    await connectDb()

    let newData = Object.fromEntries(data)
    // console.log(newData.searchusername)

    let u = await User.findOne({username : newData.searchusername})

    if (u) {

        const user = u.toObject({flattenObjectIds : true})
        return user
    }

    else {
        return false
    }

}