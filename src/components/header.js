import { Link } from "gatsby";
import PropTypes from "prop-types";
import Typed from 'typed.js';
import React, { Component } from 'react'

import { typewriterContentOptions, typewriterTitleOptions } from '../content/headerContent';
import Image from './image'
export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.typed = new Typed(this.typewriter, typewriterContentOptions);
    this.typedTitle = new Typed(this.title, typewriterTitleOptions);
  }

  componentWillUnmount() {
    this.typed.destroy();
    this.typedTittle.destory();
  }
  render() {
    
    return (
      <div className="header-container">
        <Image />
        <span className="header-title" ref={title => {this.title = title}}></span>
        <span className="header-content" ref={typewriter => {this.typewriter = typewriter; }}></span>
      </div>
    )
  }
}

