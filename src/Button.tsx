interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: IButton) => {
  return <button {...props}>{text}</button>;
};

export default Button;
