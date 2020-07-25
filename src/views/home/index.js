import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "./home";
import { getList } from "./state/actions";

const mapStateToProps = state => {
    return {
        storedList: state.listReducer.get('list')
    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getList
        },
        dispatch
    );
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
