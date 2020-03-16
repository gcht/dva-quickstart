
import { connect } from "dva"; //从dva中导入connect

//UI组件
import Counter from '../components/Counter';
import Example from '../components/Example';

//router组件
import IndexPage from '../routes/IndexPage';

const IndexPageContainer = connect((state) => { return state })(IndexPage);
export default IndexPageContainer;

export const ExampleContainer = connect((state) => {
    return { userInfo: state.exampleModel.userInfo };
})(Example);

export const CounterContainer = connect((state) => {
    return { ...state.exampleModel };
})(Counter); 
