import * as Yup from 'yup'

export const formValidationSingleDelegate = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	email: Yup.string().email('Invalid').required('Required'),
	gender: Yup.string().oneOf(['Male', 'Female', 'Other']).required('Required'),
	country: Yup.string().required('Required'),
	phone1: Yup.string().required('Required'),
	phone2: Yup.string().required('Required'),
	age: Yup.number().required('Required'),
	course: Yup.string().required('Required'),
	college: Yup.string().required('Required'),
	year: Yup.string().required('Required'),
	prevExp: Yup.string().required('Required'),
	awards: Yup.string().required('Required'),
	accommodation: Yup.string().required('Required'),
	accommodation_type: Yup.string(),
	committeeOne: Yup.string().required('Required'),
	committeeOne_countryOne: Yup.string(),
	committeeOne_countryTwo: Yup.string(),
	committeeOne_countryThree: Yup.string(),
	committeeTwo: Yup.string().required('Required'),
	committeeTwo_countryOne:Yup.string(),
	committeeTwo_countryTwo: Yup.string(),
	committeeTwo_countryThree: Yup.string(),
	committeeThree: Yup.string().required('Required'),
	committeeThree_countryOne: Yup.string(),
	committeeThree_countryTwo: Yup.string(),
	committeeThree_countryThree: Yup.string(),
})


export const formValidationDoubleDelegate = Yup.object({
	s_firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
	d_firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
	s_lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
	d_lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
	s_email: Yup.string().email('Invalid').required('Required'),
	d_email: Yup.string().email('Invalid').required('Required'),
	s_gender: Yup.string().oneOf(['Male', 'Female', 'Other']).required('Required'),
	d_gender: Yup.string().oneOf(['Male', 'Female', 'Other']).required('Required'),
	s_country: Yup.string().required('Required'),
	d_country: Yup.string().required('Required'),
	s_phone1: Yup.string().required('Required'),
	d_phone1: Yup.string().required('Required'),
	s_phone2: Yup.string().required('Required'),
	d_phone2: Yup.string().required('Required'),
	s_age: Yup.number().required('Required'),
	d_age: Yup.number().required('Required'),
	s_course: Yup.string().required('Required'),
	d_course: Yup.string().required('Required'),
	s_college: Yup.string().required('Required'),
	d_college: Yup.string().required('Required'),
	s_year: Yup.string().required('Required'),
	d_year: Yup.string().required('Required'),
	s_prevExp: Yup.string().required('Required'),
	d_prevExp: Yup.string().required('Required'),
	s_awards: Yup.string().required('Required'),
	d_awards: Yup.string().required('Required'),
	accommodation: Yup.string().required('Required'),
	accommodation_type: Yup.string(),
	committeeOne: Yup.string().required('Required'),
	committeeOne_countryOne: Yup.string(),
	committeeOne_countryTwo: Yup.string(),
	committeeOne_countryThree: Yup.string(),
	committeeTwo: Yup.string().required('Required'),
	committeeTwo_countryOne:Yup.string(),
	committeeTwo_countryTwo: Yup.string(),
	committeeTwo_countryThree: Yup.string(),
	committeeThree: Yup.string().required('Required'),
	committeeThree_countryOne: Yup.string(),
	committeeThree_countryTwo: Yup.string(),
	committeeThree_countryThree: Yup.string(),
})