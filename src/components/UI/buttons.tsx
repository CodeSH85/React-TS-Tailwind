
const buttons = (props) => {
  const [title] = props;
  const classes = ['bg-100-red']
  return (
    <button className={classes}{...rest}>
      {title}
    </button>
  ) 
}

export default buttons;
