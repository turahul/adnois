'use strict'
const CustomerDetail = use('App/Models/CustomerDetail')
const Database = use('Database')


class CustomerDetailController {
  
    async index({ response }) {
      const customerdetail = await CustomerDetail.all()
  
      response.status(200).json({
        message: 'Here are your customers details.',
        data: customerdetail
      })
    }

  async store({ request, response }) {
    const { email, phone, address,date_of_birthday, customer_id } = request.post()
    console.log("\n")
    console.log( email, phone, address,date_of_birthday, customer_id)
    console.log("\n")

    const csdetail = await Database
  .insert({email:email, phone:phone, address:address,date_of_birthday:date_of_birthday, customer_id:customer_id})
  .into('customer_details')

   

    response.status(201).json({
      message: 'Successfully added details for customer '+customer_id,
      data: csdetail
    })
  }


  
}

module.exports = CustomerDetailController
