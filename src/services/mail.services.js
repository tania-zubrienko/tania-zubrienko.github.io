import axios from 'axios'
class MailService {

    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_APP_API_URL
        })

    }

    sendMail(formData) {
        return this.api.post('/send', formData)
    }
}

const mailService = new MailService()
export default mailService