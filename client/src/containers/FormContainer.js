import { connect } from 'react-redux';
import Form from '../components/Form';
import { getData } from '../actions/actionCreators';

const mapStateToProps = ({ data }) => ({
  data: data.data
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(getData(data))
});

export default connect(mapStateToProps)(Form);