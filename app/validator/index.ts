export const requireEmail = {
  required: 'This field is required',
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email',
  }
}

export const requirePassword = {
  required: 'This field is required',
  minLength: {
    value: 6,
    message: 'Password must be at least 6 characters long',
  },
};

export const requireFirstname = {
  
}