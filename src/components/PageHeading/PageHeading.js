import { Heading } from "./PageHeading.styled";
import PropTypes from "prop-types";

export default function PageHeading({ text }) {
  return <Heading>{text}</Heading>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
