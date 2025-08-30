"use server"
import connectDb from "@/db/connectDB";
import User from "@/models/User";
import NotFound from "@/app/not-found";

export const fetchUser = async (username) => {
    await connectDb()
    const u = await User.findOne({ username: username })
    const user = u.toObject({ flattenObjectIds: true })
    return user
    // return 'hello'
}

export const updateProfile = async (data, oldUsername) => {
    await connectDb();

    // Convert FormData to object if needed
    let newData = data instanceof Map || data instanceof FormData
        ? Object.fromEntries(data)
        : data;

    console.log("newData --->", newData);

    if (oldUsername !== newData.username) {
        let existingUser = await User.findOne({ username: newData.username });
        if (existingUser) {
            return "This username already exists. Try another one.";
        }
    }

    // Update with $set
    const result = await User.updateOne(
        { email: newData.email },
        { $set: newData }
    );

    console.log("update result --->", result);

    if (result.modifiedCount > 0) {
        return "Profile updated successfully!";
    } else {
        return "No changes made.";
    }
};

export const searchCreator = async (data) => {
    await connectDb()

    let newData = Object.fromEntries(data)
    // console.log(newData.searchusername)

    let u = await User.findOne({ username: newData.searchusername })

    if (u) {

        const user = u.toObject({ flattenObjectIds: true })
        return user
    }

    else {
        return false
    }

}
