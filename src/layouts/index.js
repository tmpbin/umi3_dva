
import { withRouter } from 'umi';
import { useEffect } from 'react';


const Main = props => {
  useEffect(() => {
    console.log('layout', props);
  });

  return (
    <>{props.children}</>
  )

};
export default withRouter(Main);
