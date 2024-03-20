export interface Login {
  email_id: string,
  password: string
}

export interface Signup {
      first_name: string ,
      last_name:string,
      email_id: string ,
      password:string ,
      referral_code:string,
      is_student: true,
      receive_newsletter:true,
      terms:true ,
}

export interface UpdateUserProfile {
    first_name: string ,
    last_name:string,
    email_id: string ,
    password:string ,
    phone_no: number,
    referral_code:string,
    is_student: true,
    receive_newsletter:true,
    terms:true ,
    resume_path: string
}