import axios from "axios"

export const sendContactMail = async (name, mail, content, mobile, company) => {
    const data = {
        name,
        mobile,
        company,
        mail,
        content
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact-route",
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