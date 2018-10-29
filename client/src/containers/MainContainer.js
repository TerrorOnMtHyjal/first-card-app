import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = ({ data }) => ({
  data: data.data
});

export default connect(mapStateToProps)(Main);