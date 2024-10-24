import authRoute from './AuthRoute/authRoute.js'
export default function routerControl(app) {
    app.use('/api/v1/auth',authRoute)
}
