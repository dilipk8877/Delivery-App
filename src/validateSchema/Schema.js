import { FILE_SIZE } from "src/utils/HandlerCommonFile";
import * as Yup from "yup";
const regWebsite =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
const SUPPORTED_FORMATS = ["", "image/jpg", "image/jpeg", "image/png"];

const SUPPORTED_CSV = ["text/csv"];
const regMatch = /^[a-zA-Z]*$/;
const alphaNumericRegex = /^[a-zA-Z0-9_]*$/;

export const AgentAddSchema = Yup.object({
  teamId: Yup.string().required("Please Select Team Id, It is required"),
  type: Yup.string().required("Please Select Agent Type, It is required"),
  first_name: Yup.string()
    .required("First Name is required")
    .trim("First Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Last Name is required")
    .trim("Last Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(13, "Phone number must be exactly 10 digits")
    .max(13, "Phone number must be exactly 10 digits"),
  website: Yup.string()
    .required("Website is required")
    .trim("Website is required")
    .matches(regWebsite, "Enter correct website url!"),
  dob: Yup.string().required("Please Select DOB, It is required"),
  plate_number: Yup.string()
    .required("Vehicle Number is required")
    .trim("Vehicle Number is required"),
  vehicle_type: Yup.string().required(
    "Please Select Vehicle Type, It is required"
  ),
  delivery_area: Yup.string()
    .required("Delievery Area is required")
    .trim("Delievery Area is required"),
});

export const AutoAlloactionSchema = Yup.object({
  // autoAllocationType: Yup.string().required(
  //   "Please Select Auto Allocation Type"
  // ),
  maxRadius: Yup.string()
    .required("Max Raduis is Required")
    // .matches(/^[0-9]+$/, "Max Raduis must be only number")
    // .min(1, "Raduis must be between 100m and 9 km")           
    // .max(1, "Raduis must be between 100m and 9 km"),
});

export const AddGeoFenceSchema = Yup.object({
  geofencing_name: Yup.string().required("Geo Fence Name is Required"),
  location: Yup.string().required(
    "Location is Required, and Assign Area to Team"
  ),
  teamName: Yup.string().required("Select Team Name, It is Required"),
  coordinates: Yup.array().required("Assign Area to Team"),
});

export const AddManagerSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .trim("First Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Last Name is required")
    .trim("Last Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required")
    .trim("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(13, "Phone number must be exactly 10 digits")
    .max(13, "Phone number must be exactly 10 digits"),
  status: Yup.string().required("Please Select Status, It's required"),
});

export const AddPricingRuleSchema = Yup.object({
  name: Yup.string().required("Name is Required").trim("Name is Required"),
  geoFenceId: Yup.string().required("Please Select Geo Fence").nullable(),
  teamId: Yup.string().required("Please Select Team Name").nullable(),
  agentVehicle: Yup.string().required("Please Select Vehicle Type").nullable(),
  basePrice: Yup.string()
    .required("Base Price is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Base Price must be only number")
    .min(0, "Base Price must be exactly 0 digits")
    .max(4, "Base Price must be exactly 4 digits"),
  baseDuration: Yup.string()
    .required("Base Duration is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Base Duration must be only number")
    .min(0, "Base Duration must be exactly 0 digits")
    .max(4, "Base Duration must be exactly 4 digits"),
  baseDistance: Yup.string()
    .required("Base Distance is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Base Distance must be only number")
    .min(0, "Base Distance must be exactly 0 digits")
    .max(4, "Base Distance must be exactly 4 digits"),
  DurationPrice: Yup.string()
    .required("Duration Price is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Duration Price must be only number")
    .min(0, "Duration Price must be exactly 0 digits")
    .max(4, "Duration Price must be exactly 4 digits"),
  DistanceFee: Yup.string()
    .required("Distance Fee is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Distance Fee must be only number")
    .min(0, "Distance Fee must be exactly 0 digits")
    .max(4, "Distance Fee must be exactly 4 digits"),
  agentCommPercnt: Yup.string()
    .required("Agent Commission Percentage is Required")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    )
    .matches(/^[0-9]+$/, "Agent Commission Percentage must be only number")
    .min(0, "Agent Commission Percentage must be exactly 0 digits")
    .max(4, "Agent Commission Percentage must be exactly 4 digits"),
});

export const AddTeamSchema = Yup.object({
  team_name: Yup.string()
    .required("Team Name is required")
    .trim("Team Name is required"),
  team_tag: Yup.string()
    .required("Team tag is required")
    .trim("Team tag is required"),
});

export const AddCustomerSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Last Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  // image: Yup.string().notRequired()
  //   // .required(" File is required")
  //   .test(
  //     "fileFormat",
  //     "You can upload only jpg,png,jpeg file",
  //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
  //   ),
  mobile: Yup.string()
    .required("Phone number is required")
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(13, "Phone number Must be exactly 10 digits")
    .max(13, "Phone number Must be exactly 10 digits"),
});

export const UpdateCustomerSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Last Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  mobile: Yup.string()
    .required("Phone number is required")
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(13, "Phone number must be exactly 10 digits")
    .max(13, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export const ImportCustomerSchema = Yup.object({
  file: Yup.mixed()
    .required(" File is required")
    .test(
      "type",
      "You can upload only CSV file",
      (value) => value && SUPPORTED_CSV.includes(value.type)
    ),
});

export const AddMerchantSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .trim("First Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Last Name is required")
    .trim("Last Name is required")
    .matches(regMatch, "Only alphabets are allowed"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Phone number is required")
    .min(13, "Phone number must be exactly 10 digits")
    .max(13, "Phone number must be exactly 10 digits"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[0-9]+$/, "Pincode must be only number")
    .min(6, "Pincode must be exactly 6 digits")
    .max(6, "Pincode must be exactly 6 digits"),
  address: Yup.string()
    .required("Address is required")
    .trim("Address is required"),
  website: Yup.string()
    .required("Website is required")
    .trim("Website is required")
    .matches(regWebsite, "Enter correct website url!"),
  state: Yup.string().required("State is required"),
  district: Yup.string().required("District is required"),
  country: Yup.string().required("Country is required"),
  // logo: Yup.mixed().notRequired()
  //   // .required(" File is required")
  //   .test(
  //     "fileFormat",
  //     "You can upload only jpg,png,jpeg file",
  //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
  //   )
  //   .test(
  //     "file_size",
  //     "File Size is too large",
  //     (value) => value && value.size <= FILE_SIZE
  //   ),
  // bannerImage: Yup.mixed().notRequired()
  //   // .required(" File is required")
  //   .test(
  //     "fileFormat",
  //     "You can upload only jpg,png,jpeg file",
  //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
  //   )
  //   .test(
  //     "file_size",
  //     "File Size is too large",
  //     (value) => value && value.size <= FILE_SIZE
  //   ),
});

export const ImportMerchant = Yup.object({
  file: Yup.mixed()
    .required("File is required")
    .test(
      "type",
      "You can upload only CSV file",
      (value) => value && SUPPORTED_CSV.includes(value.type)
    ),
});

export const AddMobileBanner = Yup.object({
  name: Yup.string()
    .required("Banner Name is Required")
    .trim("Banner Name is Required"),
  startDate: Yup.string().required("Start Date is Required"),
  endDate: Yup.string().required("End Date is Required"),
  bannerImages: Yup.mixed()
    .required(" File is required")
    .test(
      "file_size",
      "File Size is too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "You can upload only jpg,png,jpeg file",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

export const UpdateMobileBanner = Yup.object({
  name: Yup.string()
    .required("Banner Name is Required")
    .trim("Banner Name is Required"),
  startDate: Yup.string().required("Start Date is Required"),
  endDate: Yup.string().required("End Date is Required"),
});

export const LoginSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const ProfileSchema = Yup.object({
  profileImage: Yup.mixed()
    .test("file_size", "File Size is too large", (value) => {
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    })
    .test("fileType", "You can upload only jpg,png,jpeg file", (value) => {
      if (!value) {
        return true;
      }
      return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
    }),
  first_name: Yup.string()
    .required("Name is Required")
    .matches(regMatch, "Only alphabets are allowed"),
  last_name: Yup.string()
    .required("Name is Required")
    .matches(regMatch, "Only alphabets are allowed"),
  mobile: Yup.string()
    .required("Phone number is required")
    .min(13, "Phone number must be exactly 10 digits")
    .max(13, "Phone number must be exactly 10 digits"),
  company_address: Yup.string()
    .required("Company Address is Required")
    .trim("Company Address is Required"),
  company_name: Yup.string()
    .required("Company Name is Required")
    .trim("Company Name is Required")
    .matches(regMatch, "Only alphabets are allowed"),
  short_code: Yup.string()
    .required("Short Code is Required")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .matches(alphaNumericRegex, "Special Characters not allowed")
    .trim("Short Code is Required"),
  country: Yup.string()
    .required("Country is Required")
    .trim("Country is Required")
    .matches(regMatch, "Only alphabets are allowed"),
});

export const AddPromocode = Yup.object({
  Title: Yup.string()
    .required("Title is required")
    .matches(alphaNumericRegex, "Special Characters not allowed"),
  Description: Yup.string().required("Short Description is required"),
  promo_code: Yup.string()
    .required("Promocode is required")
    .matches(alphaNumericRegex, "Special Characters not allowed"),
  Promo_Type: Yup.string().required("Promo type is required"),
  discount: Yup.string()
    .required("Discount is required")
    .matches(/^[0-9]+$/, "Must be only number")
    .max(2, "Amount should be less than 100"),
  ExpiryDate: Yup.string().required("Expire Date is required"),
});
