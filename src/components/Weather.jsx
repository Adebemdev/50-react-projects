const Weather = (props) => {
  console.log(props);
  if (props.tem < 15) {
    return <p>Oh!!, it's cold outside</p>;
  } else if (props.tem > 15 && props.tem < 25) {
    return <p>Oh!!, it's nice outside</p>;
  } else {
    return <p>It's hot outside, the scorching heat is much</p>;
  }
};

export default Weather;
