const Button = ({ primary, modifier, children, onClick, ...rest }) => {
    // Define the base style
    const baseStyle = 'font-sans font-medium py-2 px-4 border rounded';

    // Define styles based on the `primary` prop
    const styles = primary
        ? 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700'
        : 'bg-white text-indigo-600 border-indigo-300 hover:bg-gray-100';

    // Combine styles
    const combinedStyles = `${baseStyle} ${styles} ${modifier || ''}`;

    return (
        <button
            type="button"
            onClick={onClick}
            className={combinedStyles}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
