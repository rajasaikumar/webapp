import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact,faHtml5,faJs,faJava,faBootstrap,faGithub,faCss3} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
   <>
  <div className='container'>
    <div className='row'>
      <div className='col mt-5 text-warning skill'>
<p>Rules of hooks
There are two rules of hooks[22] which describe the characteristic code patterns that hooks rely on:

"Only call hooks at the top level" — don't call hooks from inside loops, conditions, or nested statements so that the hooks are called in the same order each render.
"Only call hooks from React functions" — don't call hooks from plain JavaScript functions so that stateful logic stays with the component.
Although these rules can't be enforced at runtime, code analysis tools such as linters can be configured to detect many mistakes during development. The rules apply to both usage of Hooks and the implementation of custom Hooks,[23] which may call other Hooks</p>
      
      </div>
    </div>

    <div className='container'>
<div className='row'>
<div className='col mt-5 xyz'>
      <FontAwesomeIcon icon={faReact}  className='abc1' />
      <FontAwesomeIcon icon={faHtml5} className='abc1'/>
      <FontAwesomeIcon icon={faJs} className='abc1' />
      <FontAwesomeIcon icon={faJava} className='abc1'/>
      <FontAwesomeIcon icon={faBootstrap} className='abc1' />
      <FontAwesomeIcon icon={faDatabase} className='abc1'/>
      <FontAwesomeIcon icon={faGithub} className='abc1'/>
      <FontAwesomeIcon icon={faCss3} className='abc1'/>
      </div>

</div>
    </div>

  </div>
   
   </>
  )
}

export default Skills
