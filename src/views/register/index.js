import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Register from "./register";

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
    )(Register)
);
