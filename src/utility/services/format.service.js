class FormatService {
    truncate(value, len) {
        if (value.length <= len) {
            return value;
        }
        value = value.slice(0, len) + "...";
        return value;
    }
    generateInitialName(fullName) {
        const arrFullName = fullName.split(" ");
        let initial = "";
        arrFullName.map((fn) => {
            initial !== undefined ? (initial += fn.charAt(0)) : (initial = fn.charAt(0));
        });
        return initial;
    }
}
export default FormatService;
