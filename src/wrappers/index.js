
import { withRouter } from 'umi';
import { useEffect } from 'react';


const Wrapper = props => {
  useEffect(() => {
    console.log('wrapper', props);
  });

  return (
    <>{props.children}</>
  )

};
export default withRouter(Wrapper);
