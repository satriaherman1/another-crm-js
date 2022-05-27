import React from "react";
export function ActivityIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#98A5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Calendar2Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
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
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>);
}
export function UserProfileIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1399 21.62C17.2599 21.88 16.2199 22 14.9999 22H8.99986C7.77986 22 6.73986 21.88 5.85986 21.62C6.07986 19.02 8.74986 16.97 11.9999 16.97C15.2499 16.97 17.9199 19.02 18.1399 21.62Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function UserGroupIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function TicketIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 4L10 20" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
    </svg>);
}
export function PriceTagIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 12C10.8807 12 12 10.8808 12 9.50005C12 8.11933 10.8807 7.00005 9.5 7.00005C8.11929 7.00005 7 8.11933 7 9.50005C7 10.8808 8.11929 12 9.5 12Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>);
}
export function NoteIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H12" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17H16" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MenuIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Note2Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.29999C8.46018 6.44999 8.70018 5.70999 9.00018 5.09999C10.1702 2.67999 12.1602 2.02999 15.5002 2.81999L17.1702 3.20999C21.3602 4.18999 22.6402 6.25999 21.6602 10.44Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0599 19.39C14.4399 19.81 13.6599 20.16 12.7099 20.47L11.1299 20.99C7.15985 22.27 5.06985 21.2 3.77985 17.23L2.49985 13.28C1.21985 9.31001 2.27985 7.21001 6.24985 5.93001L7.82985 5.41001C8.23985 5.28001 8.62985 5.17001 8.99985 5.10001C8.69985 5.71001 8.45985 6.45001 8.25985 7.30001L7.27985 11.49C6.29985 15.67 7.58985 17.73 11.7599 18.72L13.4399 19.12C14.0199 19.26 14.5599 19.35 15.0599 19.39Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6401 8.53L17.4901 9.76" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6602 12.4L14.5602 13.14" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function SettingIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.09082 9.10998V14.88C3.09082 17 3.09082 17 4.909 18.35L9.909 21.53C10.6635 22.01 11.8908 22.01 12.6363 21.53L17.6363 18.35C19.4545 17 19.4545 17 19.4545 14.89V9.10998C19.4545 6.99998 19.4545 6.99999 17.6363 5.64999L12.6363 2.46999C11.8908 1.98999 10.6635 1.98999 9.909 2.46999L4.909 5.64999C3.09082 6.99999 3.09082 6.99998 3.09082 9.10998Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2727 15C12.7789 15 14 13.6569 14 12C14 10.3431 12.7789 9 11.2727 9C9.76645 9 8.54541 10.3431 8.54541 12C8.54541 13.6569 9.76645 15 11.2727 15Z" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function LogoutIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9819 14.62L13.3092 12.06L10.9819 9.5" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12.06H13.2455" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2729 4C15.2911 4 18.5457 7 18.5457 12C18.5457 17 15.2911 20 11.2729 20" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MailIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={fill ? fill : "white"} strokeOpacity="0.72" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeOpacity="0.72" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function NotificationIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6143 17.8476C18.2535 17.8476 20.8623 17.1242 21.1143 14.2205C21.1143 11.3188 19.2954 11.5054 19.2954 7.94511C19.2954 5.16414 16.6595 2 12.6143 2C8.56903 2 5.93311 5.16414 5.93311 7.94511C5.93311 11.5054 4.11426 11.3188 4.11426 14.2205C4.36721 17.1352 6.97603 17.8476 12.6143 17.8476Z" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0031 20.8572C13.639 22.3719 11.511 22.3899 10.1338 20.8572" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function Setting5Icon(props) {
    const { className, fill, width, height } = props;
    return (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
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
    return (<svg className={className ?? ""} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.54639 5.83331H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2.54639 10H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2.54639 14.1667H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>);
}
export function TickCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill={fill ? fill : "#6FCF97"}/>
    </svg>);
}
export function CloseCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill={fill ? fill : "#98A5CD"}/>
    </svg>);
}
export function LockIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke={fill ? fill : "white"} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function FilterIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6726 4.10001V6.30001C20.6726 7.10001 20.1726 8.10001 19.6726 8.60001L15.3726 12.4C14.7726 12.9 14.3726 13.9 14.3726 14.7V19C14.3726 19.6 13.9726 20.4 13.4726 20.7L12.0726 21.6C10.7726 22.4 8.97264 21.5 8.97264 19.9V14.6C8.97264 13.9 8.57264 13 8.17264 12.5L7.70264 12.01C7.39264 11.68 7.33264 11.18 7.58264 10.79L12.7026 2.57001C12.8826 2.28001 13.2026 2.10001 13.5526 2.10001H18.6726C19.7726 2.10001 20.6726 3.00001 20.6726 4.10001Z" fill={fill ? fill : "#757B8C"}/>
      <path d="M10.4227 3.63001L6.87266 9.32001C6.53266 9.87001 5.75266 9.95001 5.30266 9.48001L4.37266 8.50001C3.87266 8.00001 3.47266 7.10001 3.47266 6.50001V4.20001C3.47266 3.00001 4.37266 2.10001 5.47266 2.10001H9.57266C10.3527 2.10001 10.8327 2.96001 10.4227 3.63001Z" fill={fill ? fill : "#757B8C"}/>
    </svg>);
}
export function EyeIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4089 9.15C19.9808 5.52 16.4281 3.43 12.6862 3.43C10.8153 3.43 8.9969 3.95 7.33617 4.92C5.67544 5.9 4.18288 7.33 2.96361 9.15C1.91252 10.72 1.91252 13.27 2.96361 14.84C5.39164 18.48 8.94434 20.56 12.6862 20.56C14.5572 20.56 16.3756 20.04 18.0363 19.07C19.697 18.09 21.1896 16.66 22.4089 14.84C23.46 13.28 23.46 10.72 22.4089 9.15ZM12.6862 16.04C10.3318 16.04 8.43982 14.23 8.43982 12C8.43982 9.77 10.3318 7.96 12.6862 7.96C15.0407 7.96 16.9327 9.77 16.9327 12C16.9327 14.23 15.0407 16.04 12.6862 16.04Z" fill={fill ?? "#0EC8CE"}/>
      <path d="M12.6865 9.14C11.0363 9.14 9.69092 10.42 9.69092 12C9.69092 13.57 11.0363 14.85 12.6865 14.85C14.3368 14.85 15.6927 13.57 15.6927 12C15.6927 10.43 14.3368 9.14 12.6865 9.14Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function MonitorIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.43975 1.66666H14.6981C17.6647 1.66666 18.4064 2.40833 18.4064 5.36666V10.6417C18.4064 13.6083 17.6647 14.3417 14.7064 14.3417H5.43975C2.48141 14.35 1.73975 13.6083 1.73975 10.65V5.36666C1.73975 2.40833 2.48141 1.66666 5.43975 1.66666Z" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0732 14.35V18.3333" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.73975 10.8333H18.4064" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.32324 18.3333H13.8232" stroke={fill ? fill : "#C4C4C4"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MoreIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.80287 10C4.64667 10 3.70068 10.9 3.70068 12C3.70068 13.1 4.64667 14 5.80287 14C6.95908 14 7.90506 13.1 7.90506 12C7.90506 10.9 6.95908 10 5.80287 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
      <path d="M20.5182 10C19.362 10 18.416 10.9 18.416 12C18.416 13.1 19.362 14 20.5182 14C21.6744 14 22.6204 13.1 22.6204 12C22.6204 10.9 21.6744 10 20.5182 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
      <path d="M13.1603 10C12.0041 10 11.0581 10.9 11.0581 12C11.0581 13.1 12.0041 14 13.1603 14C14.3165 14 15.2625 13.1 15.2625 12C15.2625 10.9 14.3165 10 13.1603 10Z" stroke={fill ? fill : "white"} strokeWidth="1.5"/>
    </svg>);
}
export function SendIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.19257 4.38421C6.39848 2.98547 3.29759 5.63695 4.24839 8.61184L5.33571 12.0138L4.25431 15.3845C3.30043 18.3576 6.3969 21.0124 9.19248 19.6182L18.1193 15.1663C20.7223 13.8682 20.7252 10.1575 18.1241 8.85543L9.19257 4.38421Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function VideoCircleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6862 2C6.8842 2 2.17529 6.48 2.17529 12C2.17529 17.52 6.8842 22 12.6862 22C18.4883 22 23.1972 17.52 23.1972 12C23.1972 6.48 18.4883 2 12.6862 2ZM15.4822 13.73L14.1368 14.47L12.7914 15.21C11.057 16.16 9.63807 15.38 9.63807 13.48V12V10.52C9.63807 8.61 11.057 7.84 12.7914 8.79L14.1368 9.53L15.4822 10.27C17.2165 11.22 17.2165 12.78 15.4822 13.73Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function SearchIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.82492" cy="7.82492" r="6.74142" stroke={fill ? fill : "#3C4254"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5137 12.8638L15.1567 15.4999" stroke={fill ? fill : "#3C4254"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function ArrowDown(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1364 11.865H9.23105H4.81388C4.058 11.865 3.68006 10.995 4.21547 10.485L8.29408 6.59999C8.9476 5.97749 10.0106 5.97749 10.6641 6.59999L12.2152 8.07749L14.7427 10.485C15.2702 10.995 14.8923 11.865 14.1364 11.865Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function SettingDottedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.08911" cy="2" r="1.5" fill={fill ? fill : "#757B8C"}/>
      <circle cx="2.08911" cy="11" r="1.5" fill={fill ? fill : "#757B8C"}/>
      <circle cx="2.08911" cy="20" r="1.5" fill={fill ? fill : "#757B8C"}/>
    </svg>);
}
export function ArrowDownOutlinedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5399 5.59375L8.46489 9.66875C7.98364 10.15 7.19614 10.15 6.71489 9.66875L2.63989 5.59375" stroke={fill ? fill : "#30E0A1"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function AddIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18" stroke={fill ? fill : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18V6" stroke={fill ? fill : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MessageFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function PhoneFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill={fill ? fill : "#0EC8CE"}/>
      <path d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function ClipboardTickFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z" fill={fill ? fill : "#0EC8CE"}/>
      <path d="M17.24 4.82C17.24 6.41 15.94 7.71 14.35 7.71H9.65004C8.06004 7.71 6.76004 6.41 6.76004 4.82C6.76004 4.26 6.16004 3.91 5.66004 4.17C4.25004 4.92 3.29004 6.41 3.29004 8.12V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.12C20.71 6.41 19.75 4.92 18.34 4.17C17.84 3.91 17.24 4.26 17.24 4.82ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z" fill={fill ? fill : "#0EC8CE"}/>
    </svg>);
}
export function InstagramFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "20"} height={height ? height : "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99834 0.400024C2.91114 0.400024 0.399902 2.91359 0.399902 6.00159V14.0016C0.399902 17.0888 2.91346 19.6 6.00146 19.6H14.0015C17.0887 19.6 19.5999 17.0865 19.5999 13.9985V5.99846C19.5999 2.91126 17.0863 0.400024 13.9983 0.400024H5.99834ZM15.5999 3.60002C16.0415 3.60002 16.3999 3.95842 16.3999 4.40002C16.3999 4.84162 16.0415 5.20002 15.5999 5.20002C15.1583 5.20002 14.7999 4.84162 14.7999 4.40002C14.7999 3.95842 15.1583 3.60002 15.5999 3.60002ZM9.9999 5.20002C12.6471 5.20002 14.7999 7.35282 14.7999 10C14.7999 12.6472 12.6471 14.8 9.9999 14.8C7.3527 14.8 5.1999 12.6472 5.1999 10C5.1999 7.35282 7.3527 5.20002 9.9999 5.20002ZM9.9999 6.80002C9.15121 6.80002 8.33728 7.13717 7.73716 7.73728C7.13704 8.3374 6.7999 9.15133 6.7999 10C6.7999 10.8487 7.13704 11.6626 7.73716 12.2628C8.33728 12.8629 9.15121 13.2 9.9999 13.2C10.8486 13.2 11.6625 12.8629 12.2626 12.2628C12.8628 11.6626 13.1999 10.8487 13.1999 10C13.1999 9.15133 12.8628 8.3374 12.2626 7.73728C11.6625 7.13717 10.8486 6.80002 9.9999 6.80002Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function TiktokFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99656 0.919983 0.919922 1.99662 0.919922 3.31998V18.68C0.919922 20.0033 1.99656 21.08 3.31992 21.08H18.6799C20.0033 21.08 21.0799 20.0033 21.0799 18.68V3.31998C21.0799 1.99662 20.0033 0.919983 18.6799 0.919983ZM16.7628 9.71502C16.6538 9.7251 16.5434 9.73182 16.4316 9.73182C15.1726 9.73182 14.0662 9.0843 13.4225 8.10558C13.4225 10.6731 13.4225 13.5944 13.4225 13.6433C13.4225 15.9037 11.5898 17.7363 9.32952 17.7363C7.0692 17.7363 5.23656 15.9037 5.23656 13.6433C5.23656 11.383 7.0692 9.55038 9.32952 9.55038C9.41496 9.55038 9.49848 9.55806 9.58248 9.56334V11.5803C9.49848 11.5702 9.41592 11.5549 9.32952 11.5549C8.1756 11.5549 7.24056 12.4899 7.24056 13.6438C7.24056 14.7977 8.1756 15.7328 9.32952 15.7328C10.4834 15.7328 11.5025 14.8237 11.5025 13.6697C11.5025 13.6241 11.5226 4.26462 11.5226 4.26462H13.4503C13.6318 5.9883 15.0233 7.34862 16.7628 7.47342V9.71502Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function TwitterFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "22"} height={height ? height : "18"} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3999 2.54963C20.6343 2.88963 19.8119 3.11843 18.9487 3.22163C19.8303 2.69363 20.5063 1.85763 20.8247 0.860828C20.0007 1.34963 19.0871 1.70483 18.1143 1.89683C17.3359 1.06723 16.2271 0.548828 14.9999 0.548828C12.6431 0.548828 10.7327 2.46003 10.7327 4.81603C10.7327 5.15043 10.7711 5.47683 10.8431 5.78803C7.29672 5.61043 4.15272 3.91123 2.04712 1.32883C1.68072 1.95923 1.47032 2.69203 1.47032 3.47523C1.47032 4.95523 2.22312 6.26163 3.36792 7.02643C2.66872 7.00403 2.01032 6.81203 1.43512 6.49283C1.43512 6.51123 1.43512 6.52803 1.43512 6.54643C1.43512 8.61443 2.90552 10.3392 4.85832 10.7304C4.50072 10.828 4.12312 10.88 3.73352 10.88C3.45912 10.88 3.19112 10.8528 2.93112 10.804C3.47432 12.4992 5.05032 13.7336 6.91752 13.768C5.45752 14.9128 3.61752 15.5952 1.61752 15.5952C1.27352 15.5952 0.933521 15.5752 0.599121 15.5352C2.48792 16.7456 4.73032 17.452 7.14072 17.452C14.9903 17.452 19.2815 10.9496 19.2815 5.31043C19.2815 5.12563 19.2775 4.94163 19.2695 4.75843C20.1039 4.15603 20.8279 3.40483 21.3999 2.54963Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function FacebookFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99512 0.919983 0.919922 1.99518 0.919922 3.31998V18.68C0.919922 20.0048 1.99512 21.08 3.31992 21.08H18.6799C20.0047 21.08 21.0799 20.0048 21.0799 18.68V3.31998C21.0799 1.99518 20.0047 0.919983 18.6799 0.919983ZM16.7599 8.11998H15.7999C14.7727 8.11998 14.3599 8.35998 14.3599 9.07998V10.52H16.7599L16.2799 12.92H14.3599V20.12H11.9599V12.92H10.0399V10.52H11.9599V9.07998C11.9599 7.15998 12.9199 5.71998 14.8399 5.71998C16.2319 5.71998 16.7599 6.19998 16.7599 6.19998V8.11998Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function LinkedinFilledIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "22"} height={height ? height : "22"} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6799 0.919983H3.31992C1.99512 0.919983 0.919922 1.99518 0.919922 3.31998V18.68C0.919922 20.0048 1.99512 21.08 3.31992 21.08H18.6799C20.0047 21.08 21.0799 20.0048 21.0799 18.68V3.31998C21.0799 1.99518 20.0047 0.919983 18.6799 0.919983ZM7.15992 8.59998V17.72H4.27992V8.59998H7.15992ZM4.27992 5.94558C4.27992 5.27358 4.85592 4.75998 5.71992 4.75998C6.58392 4.75998 7.12632 5.27358 7.15992 5.94558C7.15992 6.61758 6.62232 7.15998 5.71992 7.15998C4.85592 7.15998 4.27992 6.61758 4.27992 5.94558ZM17.7199 17.72H14.8399C14.8399 17.72 14.8399 13.2752 14.8399 12.92C14.8399 11.96 14.3599 11 13.1599 10.9808H13.1215C11.9599 10.9808 11.4799 11.9696 11.4799 12.92C11.4799 13.3568 11.4799 17.72 11.4799 17.72H8.59992V8.59998H11.4799V9.82878C11.4799 9.82878 12.4063 8.59998 14.2687 8.59998C16.1743 8.59998 17.7199 9.91038 17.7199 12.5648V17.72Z" fill={fill ? fill : "white"}/>
    </svg>);
}
export function NotificationBing(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.43994V9.76994" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.3299 18.8199C15.3299 20.6499 13.8299 22.1499 11.9999 22.1499C11.0899 22.1499 10.2499 21.7699 9.64992 21.1699C9.04992 20.5699 8.66992 19.7299 8.66992 18.8199" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>);
}
export function CloseIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74268 4.75736L13.228 13.2426" stroke={fill ? fill : "#0EC8CE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.2279 4.75736L4.74262 13.2426" stroke={fill ? fill : "#0EC8CE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function EditIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z" fill={fill ?? "#FACB22"}/>
    </svg>);
}
export function TrashIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0702 5.23C19.4602 5.07 17.8502 4.95 16.2302 4.86V4.85L16.0102 3.55C15.8602 2.63 15.6402 1.25 13.3002 1.25H10.6802C8.35016 1.25 8.13016 2.57 7.97016 3.54L7.76016 4.82C6.83016 4.88 5.90016 4.94 4.97016 5.03L2.93016 5.23C2.51016 5.27 2.21016 5.64 2.25016 6.05C2.29016 6.46 2.65016 6.76 3.07016 6.72L5.11016 6.52C10.3502 6 15.6302 6.2 20.9302 6.73C20.9602 6.73 20.9802 6.73 21.0102 6.73C21.3902 6.73 21.7202 6.44 21.7602 6.05C21.7902 5.64 21.4902 5.27 21.0702 5.23Z" fill={fill ?? "#FA2256"}/>
      <path d="M19.2302 8.14C18.9902 7.89 18.6602 7.75 18.3202 7.75H5.68024C5.34024 7.75 5.00024 7.89 4.77024 8.14C4.54024 8.39 4.41024 8.73 4.43024 9.08L5.05024 19.34C5.16024 20.86 5.30024 22.76 8.79024 22.76H15.2102C18.7002 22.76 18.8402 20.87 18.9502 19.34L19.5702 9.09C19.5902 8.73 19.4602 8.39 19.2302 8.14ZM13.6602 17.75H10.3302C9.92024 17.75 9.58024 17.41 9.58024 17C9.58024 16.59 9.92024 16.25 10.3302 16.25H13.6602C14.0702 16.25 14.4102 16.59 14.4102 17C14.4102 17.41 14.0702 17.75 13.6602 17.75ZM14.5002 13.75H9.50024C9.09024 13.75 8.75024 13.41 8.75024 13C8.75024 12.59 9.09024 12.25 9.50024 12.25H14.5002C14.9102 12.25 15.2502 12.59 15.2502 13C15.2502 13.41 14.9102 13.75 14.5002 13.75Z" fill={fill ?? "#FA2256"}/>
    </svg>);
}
export function ClocklIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "18"} height={height ?? "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5625 9.9375C15.5625 13.56 12.6225 16.5 9 16.5C5.3775 16.5 2.4375 13.56 2.4375 9.9375C2.4375 6.315 5.3775 3.375 9 3.375C12.6225 3.375 15.5625 6.315 15.5625 9.9375Z" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 6V9.75" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.75 1.5H11.25" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MicrophoneIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "18"} height={height ?? "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.625C10.6575 11.625 12 10.2825 12 8.625V4.5C12 2.8425 10.6575 1.5 9 1.5C7.3425 1.5 6 2.8425 6 4.5V8.625C6 10.2825 7.3425 11.625 9 11.625Z" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.26245 7.2375V8.5125C3.26245 11.6775 5.83495 14.25 8.99995 14.25C12.165 14.25 14.7375 11.6775 14.7375 8.5125V7.2375" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.95752 4.8225C8.63252 4.575 9.36752 4.575 10.0425 4.8225" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.3999 6.4125C8.7974 6.3075 9.2099 6.3075 9.6074 6.4125" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14.25V16.5" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function HeadphoneIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "18"} height={height ?? "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.09504 13.8675V11.6775C4.09504 10.95 4.66504 10.2975 5.47504 10.2975C6.20254 10.2975 6.85504 10.8675 6.85504 11.6775V13.785C6.85504 15.2475 5.64004 16.4625 4.17754 16.4625C2.71504 16.4625 1.50004 15.24 1.50004 13.785V9.165C1.41754 4.95 4.74754 1.5375 8.96254 1.5375C13.1775 1.5375 16.5 4.95 16.5 9.0825V13.7025C16.5 15.165 15.285 16.38 13.8225 16.38C12.36 16.38 11.145 15.165 11.145 13.7025V11.595C11.145 10.8675 11.715 10.215 12.525 10.215C13.2525 10.215 13.905 10.785 13.905 11.595V13.8675" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function MessageNotifIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "18"} height={height ?? "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 7.5V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H10.5" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.625 5.25C15.6605 5.25 16.5 4.41053 16.5 3.375C16.5 2.33947 15.6605 1.5 14.625 1.5C13.5895 1.5 12.75 2.33947 12.75 3.375C12.75 4.41053 13.5895 5.25 14.625 5.25Z" stroke={fill ?? "#0EC8CE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9973 8.25H12.0041" stroke={fill ?? "#0EC8CE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.99661 8.25H9.00335" stroke={fill ?? "#0EC8CE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99588 8.25H6.00262" stroke={fill ?? "#0EC8CE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function VoiceSquareIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M6 9.85999V14.15" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8.42999V15.57" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7V17" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 8.42999V15.57" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 9.85999V14.15" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>);
}
export function CallSlashIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M10.3201 18.97C10.4601 19.08 10.6001 19.18 10.7501 19.29C11.8901 20.12 13.0401 20.78 14.1901 21.27C15.3401 21.76 16.4301 22 17.4501 22C18.1501 22 18.8001 21.87 19.4001 21.62C20.0101 21.37 20.5501 20.98 21.0401 20.44C21.3301 20.12 21.5501 19.78 21.7201 19.42C21.8901 19.06 21.9701 18.69 21.9701 18.33C21.9701 18.05 21.9101 17.8 21.8101 17.55C21.7001 17.3 21.5201 17.09 21.2601 16.91L17.9501 14.56C17.7001 14.39 17.4701 14.26 17.2501 14.17C17.0301 14.08 16.8301 14.04 16.6401 14.04C16.3901 14.04 16.1601 14.11 15.9301 14.25C15.7001 14.37 15.4601 14.56 15.2101 14.81L14.4501 15.56C14.3401 15.67 14.2101 15.73 14.0401 15.73C13.9501 15.73 13.8701 15.72 13.7901 15.69C13.7201 15.66 13.6601 15.63 13.6101 15.61C13.4201 15.51 13.2001 15.37 12.9601 15.19" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.73 13.22C10.21 12.69 9.73 12.16 9.28 11.64C8.84 11.12 8.53 10.69 8.35 10.36C8.33 10.3 8.3 10.24 8.27 10.16C8.25 10.08 8.24 10.01 8.24 9.93C8.24 9.77 8.29 9.64 8.4 9.53L9.16 8.74C9.4 8.5 9.59 8.26 9.72 8.03C9.86 7.8 9.93 7.56 9.93 7.32C9.93 7.13 9.88 6.92 9.79 6.71C9.7 6.49 9.57 6.26 9.39 6.01L7.07 2.74C6.89 2.48 6.66 2.3 6.4 2.18C6.15 2.06 5.87 2 5.59 2C4.85 2 4.15 2.31 3.51 2.94C2.98 3.44 2.6 4 2.36 4.61C2.12 5.21 2 5.86 2 6.54C2 7.58 2.24 8.67 2.72 9.81C3.2 10.94 3.86 12.08 4.68 13.22C5.51 14.36 6.44 15.45 7.47 16.49" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L2 22" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>);
}
export function MoreRectangleIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M19 3C17.9 3 17 3.9 17 5C17 6.1 17.9 7 19 7C20.1 7 21 6.1 21 5C21 3.9 20.1 3 19 3Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
      <path d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z" fill={fill ?? "#0EC8CE"} stroke="#292D32"/>
    </svg>);
}
export function LevelIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M2.19995 14.02C3.12995 18.58 7.15995 22 12 22C16.82 22 20.8399 18.59 21.7899 14.05" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.81 10.06C20.91 5.46 16.86 2 12 2C7.16995 2 3.13995 5.43001 2.19995 9.98001" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>);
}
export function DeleteSquareIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2801 20.25H17.0001C19.7601 20.25 22.0001 18.01 22.0001 15.25V8.75C22.0001 5.99 19.7601 3.75 17.0001 3.75H10.2801C8.87005 3.75 7.53005 4.34 6.58005 5.39L3.05005 9.27C1.64005 10.82 1.64005 13.18 3.05005 14.73L6.58005 18.61C7.53005 19.66 8.87005 20.25 10.2801 20.25Z" stroke={fill ?? "#EB5757"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0001 14.47L11.0601 9.53003" stroke={fill ?? "#EB5757"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11.0601 14.47L16.0001 9.53003" stroke={fill ?? "#EB5757"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>);
}
export function FilterOutlinedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "20"} height={height ?? "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.50016 1.75H15.5002C16.4168 1.75 17.1668 2.5 17.1668 3.41667V5.25C17.1668 5.91667 16.7502 6.75 16.3335 7.16667L12.7502 10.3333C12.2502 10.75 11.9168 11.5833 11.9168 12.25V15.8333C11.9168 16.3333 11.5835 17 11.1668 17.25L10.0002 18C8.91683 18.6667 7.41683 17.9167 7.41683 16.5833V12.1667C7.41683 11.5833 7.0835 10.8333 6.75016 10.4167L3.5835 7.08333C3.16683 6.66667 2.8335 5.91667 2.8335 5.41667V3.5C2.8335 2.5 3.5835 1.75 4.50016 1.75Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.10833 1.75L5 8.33333" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function UserOutlined(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "20"} height={height ?? "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0002 10C12.3013 10 14.1668 8.13452 14.1668 5.83333C14.1668 3.53214 12.3013 1.66666 10.0002 1.66666C7.69898 1.66666 5.8335 3.53214 5.8335 5.83333C5.8335 8.13452 7.69898 10 10.0002 10Z" stroke={fill ?? "white"} strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
      <path d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333" stroke={fill ?? "white"} strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function UserOutlinedIcon(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "20"} height={height ?? "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0002 10C12.3013 10 14.1668 8.13452 14.1668 5.83333C14.1668 3.53214 12.3013 1.66666 10.0002 1.66666C7.69898 1.66666 5.8335 3.53214 5.8335 5.83333C5.8335 8.13452 7.69898 10 10.0002 10Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333" stroke={fill ?? "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function FilterRemoveOutlined(props) {
    const { className, fill, width, height } = props;
    return (<svg className={className ?? ""} width={width ?? "20"} height={height ?? "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.175 17.325L9.99997 18.0833C8.9083 18.7583 7.39163 18 7.39163 16.65V12.1917C7.39163 11.6 7.0583 10.8417 6.71663 10.425L3.51663 7.05831C3.09163 6.63331 2.7583 5.88335 2.7583 5.37501V3.44167C2.7583 2.43334 3.51663 1.67501 4.44163 1.67501H15.5583C16.4833 1.67501 17.2416 2.43336 17.2416 3.35836V5.20834C17.2416 5.88334 16.8166 6.72501 16.4 7.14168" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.0251 12.2917C18.0251 13.0333 17.8167 13.7333 17.4501 14.3333C16.7667 15.4833 15.5084 16.25 14.0667 16.25C12.6251 16.25 11.3667 15.475 10.6834 14.3333C10.3167 13.7417 10.1084 13.0333 10.1084 12.2917C10.1084 10.1083 11.8834 8.33334 14.0667 8.33334C16.2501 8.33334 18.0251 10.1083 18.0251 12.2917Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.1249 13.325L13.0332 11.2333" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.1083 11.2583L13.0166 13.35" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.2416 3.35001V5.19999C17.2416 5.87499 16.8166 6.71667 16.4 7.14167L14.9333 8.43333C14.6583 8.36666 14.3666 8.33333 14.0666 8.33333C11.8833 8.33333 10.1083 10.1083 10.1083 12.2917C10.1083 13.0333 10.3166 13.7333 10.6833 14.3333C10.9916 14.85 11.4166 15.2916 11.9333 15.6083V15.8917C11.9333 16.4 11.6 17.075 11.175 17.325L9.99997 18.0833C8.9083 18.7583 7.39163 18 7.39163 16.65V12.1917C7.39163 11.6 7.04997 10.8417 6.71663 10.425L3.51663 7.05831C3.09997 6.63331 2.7583 5.87501 2.7583 5.37501V3.43333C2.7583 2.42499 3.51663 1.66666 4.44163 1.66666H15.5583C16.4833 1.66666 17.2416 2.42501 17.2416 3.35001Z" stroke={fill ?? "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
