import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./login";

const mapStateToProps = state => {
    return {

    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
);
