import React from "react";
export function ActivityIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className !== null && className !== void 0 ? className : ""}>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#98A5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Calendar2Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className !== null && className !== void 0 ? className : ""}>
      <path d="M8 2V5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 9.09H20.5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9955 13.7H12.0045" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.29431 13.7H8.30329" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.29431 16.7H8.30329" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function CallIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className !== null && className !== void 0 ? className : ""}>
      <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>);
}
export function UserProfileIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1399 21.62C17.2599 21.88 16.2199 22 14.9999 22H8.99986C7.77986 22 6.73986 21.88 5.85986 21.62C6.07986 19.02 8.74986 16.97 11.9999 16.97C15.2499 16.97 17.9199 19.02 18.1399 21.62Z" stroke={fill ? fill : "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke={fill ? fill : "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke={fill ? fill : "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function UserGroupIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function TicketIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 4L10 20" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
    </svg>);
}
export function PriceTagIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 12C10.8807 12 12 10.8808 12 9.50005C12 8.11933 10.8807 7.00005 9.5 7.00005C8.11929 7.00005 7 8.11933 7 9.50005C7 10.8808 8.11929 12 9.5 12Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>);
}
export function NoteIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H12" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17H16" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MenuIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Note2Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.29999C8.46018 6.44999 8.70018 5.70999 9.00018 5.09999C10.1702 2.67999 12.1602 2.02999 15.5002 2.81999L17.1702 3.20999C21.3602 4.18999 22.6402 6.25999 21.6602 10.44Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0599 19.39C14.4399 19.81 13.6599 20.16 12.7099 20.47L11.1299 20.99C7.15985 22.27 5.06985 21.2 3.77985 17.23L2.49985 13.28C1.21985 9.31001 2.27985 7.21001 6.24985 5.93001L7.82985 5.41001C8.23985 5.28001 8.62985 5.17001 8.99985 5.10001C8.69985 5.71001 8.45985 6.45001 8.25985 7.30001L7.27985 11.49C6.29985 15.67 7.58985 17.73 11.7599 18.72L13.4399 19.12C14.0199 19.26 14.5599 19.35 15.0599 19.39Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6401 8.53L17.4901 9.76" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6602 12.4L14.5602 13.14" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function SettingIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.09082 9.10998V14.88C3.09082 17 3.09082 17 4.909 18.35L9.909 21.53C10.6635 22.01 11.8908 22.01 12.6363 21.53L17.6363 18.35C19.4545 17 19.4545 17 19.4545 14.89V9.10998C19.4545 6.99998 19.4545 6.99999 17.6363 5.64999L12.6363 2.46999C11.8908 1.98999 10.6635 1.98999 9.909 2.46999L4.909 5.64999C3.09082 6.99999 3.09082 6.99998 3.09082 9.10998Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2727 15C12.7789 15 14 13.6569 14 12C14 10.3431 12.7789 9 11.2727 9C9.76645 9 8.54541 10.3431 8.54541 12C8.54541 13.6569 9.76645 15 11.2727 15Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function LogoutIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9819 14.62L13.3092 12.06L10.9819 9.5" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12.06H13.2455" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2729 4C15.2911 4 18.5457 7 18.5457 12C18.5457 17 15.2911 20 11.2729 20" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MailIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={fill ? fill : "white"} strokeOpacity="0.72" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeOpacity="0.72" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function NotificationIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className !== null && className !== void 0 ? className : ""}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6143 17.8476C18.2535 17.8476 20.8623 17.1242 21.1143 14.2205C21.1143 11.3188 19.2954 11.5054 19.2954 7.94511C19.2954 5.16414 16.6595 2 12.6143 2C8.56903 2 5.93311 5.16414 5.93311 7.94511C5.93311 11.5054 4.11426 11.3188 4.11426 14.2205C4.36721 17.1352 6.97603 17.8476 12.6143 17.8476Z" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0031 20.8572C13.639 22.3719 11.511 22.3899 10.1338 20.8572" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Setting5Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className !== null && className !== void 0 ? className : ""}>
      <path d="M19.6143 22V11" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.6143 7V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6143 22V17" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6143 13V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.61426 22V11" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.61426 7V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.61426 11H7.61426" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.6143 11H21.6143" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6143 13H14.6143" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function HamburgerMenuIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.54639 5.83331H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2.54639 10H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2.54639 14.1667H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>);
}
export function TickCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill={fill ? fill : "#6FCF97"}/>
    </svg>);
}
export function CloseCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill={fill ? fill : "#98A5CD"}/>
    </svg>);
}
export function LockIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function FilterIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6726 4.10001V6.30001C20.6726 7.10001 20.1726 8.10001 19.6726 8.60001L15.3726 12.4C14.7726 12.9 14.3726 13.9 14.3726 14.7V19C14.3726 19.6 13.9726 20.4 13.4726 20.7L12.0726 21.6C10.7726 22.4 8.97264 21.5 8.97264 19.9V14.6C8.97264 13.9 8.57264 13 8.17264 12.5L7.70264 12.01C7.39264 11.68 7.33264 11.18 7.58264 10.79L12.7026 2.57001C12.8826 2.28001 13.2026 2.10001 13.5526 2.10001H18.6726C19.7726 2.10001 20.6726 3.00001 20.6726 4.10001Z" fill={fill ? fill : "#757B8C"}/>
      <path d="M10.4227 3.63001L6.87266 9.32001C6.53266 9.87001 5.75266 9.95001 5.30266 9.48001L4.37266 8.50001C3.87266 8.00001 3.47266 7.10001 3.47266 6.50001V4.20001C3.47266 3.00001 4.37266 2.10001 5.47266 2.10001H9.57266C10.3527 2.10001 10.8327 2.96001 10.4227 3.63001Z" fill={fill ? fill : "#757B8C"}/>
    </svg>);
}
export function EyeIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4089 9.15C19.9808 5.52 16.4281 3.43 12.6862 3.43C10.8153 3.43 8.9969 3.95 7.33617 4.92C5.67544 5.9 4.18288 7.33 2.96361 9.15C1.91252 10.72 1.91252 13.27 2.96361 14.84C5.39164 18.48 8.94434 20.56 12.6862 20.56C14.5572 20.56 16.3756 20.04 18.0363 19.07C19.697 18.09 21.1896 16.66 22.4089 14.84C23.46 13.28 23.46 10.72 22.4089 9.15ZM12.6862 16.04C10.3318 16.04 8.43982 14.23 8.43982 12C8.43982 9.77 10.3318 7.96 12.6862 7.96C15.0407 7.96 16.9327 9.77 16.9327 12C16.9327 14.23 15.0407 16.04 12.6862 16.04Z" fill={fill ? fill : "#0EC8CE"}/>
      <path d="M12.6865 9.14C11.0363 9.14 9.69092 10.42 9.69092 12C9.69092 13.57 11.0363 14.85 12.6865 14.85C14.3368 14.85 15.6927 13.57 15.6927 12C15.6927 10.43 14.3368 9.14 12.6865 9.14Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function MonitorIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.43975 1.66666H14.6981C17.6647 1.66666 18.4064 2.40833 18.4064 5.36666V10.6417C18.4064 13.6083 17.6647 14.3417 14.7064 14.3417H5.43975C2.48141 14.35 1.73975 13.6083 1.73975 10.65V5.36666C1.73975 2.40833 2.48141 1.66666 5.43975 1.66666Z" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0732 14.35V18.3333" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.73975 10.8333H18.4064" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.32324 18.3333H13.8232" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MoreIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.80287 10C4.64667 10 3.70068 10.9 3.70068 12C3.70068 13.1 4.64667 14 5.80287 14C6.95908 14 7.90506 13.1 7.90506 12C7.90506 10.9 6.95908 10 5.80287 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
      <path d="M20.5182 10C19.362 10 18.416 10.9 18.416 12C18.416 13.1 19.362 14 20.5182 14C21.6744 14 22.6204 13.1 22.6204 12C22.6204 10.9 21.6744 10 20.5182 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
      <path d="M13.1603 10C12.0041 10 11.0581 10.9 11.0581 12C11.0581 13.1 12.0041 14 13.1603 14C14.3165 14 15.2625 13.1 15.2625 12C15.2625 10.9 14.3165 10 13.1603 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
    </svg>);
}
export function SendIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.19257 4.38421C6.39848 2.98547 3.29759 5.63695 4.24839 8.61184L5.33571 12.0138L4.25431 15.3845C3.30043 18.3576 6.3969 21.0124 9.19248 19.6182L18.1193 15.1663C20.7223 13.8682 20.7252 10.1575 18.1241 8.85543L9.19257 4.38421Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function VideoCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6862 2C6.8842 2 2.17529 6.48 2.17529 12C2.17529 17.52 6.8842 22 12.6862 22C18.4883 22 23.1972 17.52 23.1972 12C23.1972 6.48 18.4883 2 12.6862 2ZM15.4822 13.73L14.1368 14.47L12.7914 15.21C11.057 16.16 9.63807 15.38 9.63807 13.48V12V10.52C9.63807 8.61 11.057 7.84 12.7914 8.79L14.1368 9.53L15.4822 10.27C17.2165 11.22 17.2165 12.78 15.4822 13.73Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function SearchIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.82492" cy="7.82492" r="6.74142" stroke={fill ? fill : "#3C4254"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5137 12.8638L15.1567 15.4999" stroke={fill ? fill : "#3C4254"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>);
}
export function ArrowDown(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1364 11.865H9.23105H4.81388C4.058 11.865 3.68006 10.995 4.21547 10.485L8.29408 6.59999C8.9476 5.97749 10.0106 5.97749 10.6641 6.59999L12.2152 8.07749L14.7427 10.485C15.2702 10.995 14.8923 11.865 14.1364 11.865Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function SettingDottedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.08911" cy="2" r="1.5" fill={fill ? fill : "#757B8C"}/>
      <circle cx="2.08911" cy="11" r="1.5" fill={fill ? fill : "#757B8C"}/>
      <circle cx="2.08911" cy="20" r="1.5" fill={fill ? fill : "#757B8C"}/>
    </svg>);
}
export function ArrowDownOutlinedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5399 5.59375L8.46489 9.66875C7.98364 10.15 7.19614 10.15 6.71489 9.66875L2.63989 5.59375" stroke={fill ? fill : "#30E0A1"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function AddIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18" stroke={fill ? fill : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18V6" stroke={fill ? fill : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MessageFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function PhoneFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill={fill ? fill : "#0EC8CE"}/>
      <path d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function ClipboardTickFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z" fill={fill ? fill : "#0EC8CE"}/>
      <path d="M17.24 4.82C17.24 6.41 15.94 7.71 14.35 7.71H9.65004C8.06004 7.71 6.76004 6.41 6.76004 4.82C6.76004 4.26 6.16004 3.91 5.66004 4.17C4.25004 4.92 3.29004 6.41 3.29004 8.12V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.12C20.71 6.41 19.75 4.92 18.34 4.17C17.84 3.91 17.24 4.26 17.24 4.82ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function InstagramFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "20"} height={height ? height : "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99834 0.400024C2.91114 0.400024 0.399902 2.91359 0.399902 6.00159V14.0016C0.399902 17.0888 2.91346 19.6 6.00146 19.6H14.0015C17.0887 19.6 19.5999 17.0865 19.5999 13.9985V5.99846C19.5999 2.91126 17.0863 0.400024 13.9983 0.400024H5.99834ZM15.5999 3.60002C16.0415 3.60002 16.3999 3.95842 16.3999 4.40002C16.3999 4.84162 16.0415 5.20002 15.5999 5.20002C15.1583 5.20002 14.7999 4.84162 14.7999 4.40002C14.7999 3.95842 15.1583 3.60002 15.5999 3.60002ZM9.9999 5.20002C12.6471 5.20002 14.7999 7.35282 14.7999 10C14.7999 12.6472 12.6471 14.8 9.9999 14.8C7.3527 14.8 5.1999 12.6472 5.1999 10C5.1999 7.35282 7.3527 5.20002 9.9999 5.20002ZM9.9999 6.80002C9.15121 6.80002 8.33728 7.13717 7.73716 7.73728C7.13704 8.3374 6.7999 9.15133 6.7999 10C6.7999 10.8487 7.13704 11.6626 7.73716 12.2628C8.33728 12.8629 9.15121 13.2 9.9999 13.2C10.8486 13.2 11.6625 12.8629 12.2626 12.2628C12.8628 11.6626 13.1999 10.8487 13.1999 10C13.1999 9.15133 12.8628 8.3374 12.2626 7.73728C11.6625 7.13717 10.8486 6.80002 9.9999 6.80002Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function TiktokFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99656 0.919983 0.919922 1.99662 0.919922 3.31998V18.68C0.919922 20.0033 1.99656 21.08 3.31992 21.08H18.6799C20.0033 21.08 21.0799 20.0033 21.0799 18.68V3.31998C21.0799 1.99662 20.0033 0.919983 18.6799 0.919983ZM16.7628 9.71502C16.6538 9.7251 16.5434 9.73182 16.4316 9.73182C15.1726 9.73182 14.0662 9.0843 13.4225 8.10558C13.4225 10.6731 13.4225 13.5944 13.4225 13.6433C13.4225 15.9037 11.5898 17.7363 9.32952 17.7363C7.0692 17.7363 5.23656 15.9037 5.23656 13.6433C5.23656 11.383 7.0692 9.55038 9.32952 9.55038C9.41496 9.55038 9.49848 9.55806 9.58248 9.56334V11.5803C9.49848 11.5702 9.41592 11.5549 9.32952 11.5549C8.1756 11.5549 7.24056 12.4899 7.24056 13.6438C7.24056 14.7977 8.1756 15.7328 9.32952 15.7328C10.4834 15.7328 11.5025 14.8237 11.5025 13.6697C11.5025 13.6241 11.5226 4.26462 11.5226 4.26462H13.4503C13.6318 5.9883 15.0233 7.34862 16.7628 7.47342V9.71502Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function TwitterFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "22"} height={height ? height : "18"} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3999 2.54963C20.6343 2.88963 19.8119 3.11843 18.9487 3.22163C19.8303 2.69363 20.5063 1.85763 20.8247 0.860828C20.0007 1.34963 19.0871 1.70483 18.1143 1.89683C17.3359 1.06723 16.2271 0.548828 14.9999 0.548828C12.6431 0.548828 10.7327 2.46003 10.7327 4.81603C10.7327 5.15043 10.7711 5.47683 10.8431 5.78803C7.29672 5.61043 4.15272 3.91123 2.04712 1.32883C1.68072 1.95923 1.47032 2.69203 1.47032 3.47523C1.47032 4.95523 2.22312 6.26163 3.36792 7.02643C2.66872 7.00403 2.01032 6.81203 1.43512 6.49283C1.43512 6.51123 1.43512 6.52803 1.43512 6.54643C1.43512 8.61443 2.90552 10.3392 4.85832 10.7304C4.50072 10.828 4.12312 10.88 3.73352 10.88C3.45912 10.88 3.19112 10.8528 2.93112 10.804C3.47432 12.4992 5.05032 13.7336 6.91752 13.768C5.45752 14.9128 3.61752 15.5952 1.61752 15.5952C1.27352 15.5952 0.933521 15.5752 0.599121 15.5352C2.48792 16.7456 4.73032 17.452 7.14072 17.452C14.9903 17.452 19.2815 10.9496 19.2815 5.31043C19.2815 5.12563 19.2775 4.94163 19.2695 4.75843C20.1039 4.15603 20.8279 3.40483 21.3999 2.54963Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function FacebookFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99512 0.919983 0.919922 1.99518 0.919922 3.31998V18.68C0.919922 20.0048 1.99512 21.08 3.31992 21.08H18.6799C20.0047 21.08 21.0799 20.0048 21.0799 18.68V3.31998C21.0799 1.99518 20.0047 0.919983 18.6799 0.919983ZM16.7599 8.11998H15.7999C14.7727 8.11998 14.3599 8.35998 14.3599 9.07998V10.52H16.7599L16.2799 12.92H14.3599V20.12H11.9599V12.92H10.0399V10.52H11.9599V9.07998C11.9599 7.15998 12.9199 5.71998 14.8399 5.71998C16.2319 5.71998 16.7599 6.19998 16.7599 6.19998V8.11998Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function LinkedinFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99512 0.919983 0.919922 1.99518 0.919922 3.31998V18.68C0.919922 20.0048 1.99512 21.08 3.31992 21.08H18.6799C20.0047 21.08 21.0799 20.0048 21.0799 18.68V3.31998C21.0799 1.99518 20.0047 0.919983 18.6799 0.919983ZM7.15992 8.59998V17.72H4.27992V8.59998H7.15992ZM4.27992 5.94558C4.27992 5.27358 4.85592 4.75998 5.71992 4.75998C6.58392 4.75998 7.12632 5.27358 7.15992 5.94558C7.15992 6.61758 6.62232 7.15998 5.71992 7.15998C4.85592 7.15998 4.27992 6.61758 4.27992 5.94558ZM17.7199 17.72H14.8399C14.8399 17.72 14.8399 13.2752 14.8399 12.92C14.8399 11.96 14.3599 11 13.1599 10.9808H13.1215C11.9599 10.9808 11.4799 11.9696 11.4799 12.92C11.4799 13.3568 11.4799 17.72 11.4799 17.72H8.59992V8.59998H11.4799V9.82878C11.4799 9.82878 12.4063 8.59998 14.2687 8.59998C16.1743 8.59998 17.7199 9.91038 17.7199 12.5648V17.72Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function NotificationBing(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.43994V9.76994" stroke={fill ? fill : "white"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke={fill ? fill : "white"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M15.3299 18.8199C15.3299 20.6499 13.8299 22.1499 11.9999 22.1499C11.0899 22.1499 10.2499 21.7699 9.64992 21.1699C9.04992 20.5699 8.66992 19.7299 8.66992 18.8199" stroke={fill ? fill : "white"} stroke-width="1.5" stroke-miterlimit="10"/>
    </svg>);
}
export function CloseIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className !== null && className !== void 0 ? className : ""} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74268 4.75736L13.228 13.2426" stroke={fill ? fill : "#0EC8CE"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.2279 4.75736L4.74262 13.2426" stroke={fill ? fill : "#0EC8CE"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>);
}
