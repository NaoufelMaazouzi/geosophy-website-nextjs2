import axios from "axios"

export const sendContactMail = async (recipientMail, name, email, message, mobile, company) => {
    const data = {
        recipientMail,
        name,
        email,
        mobile,
        company,
        message
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}