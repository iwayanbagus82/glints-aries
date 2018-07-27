import React, { Component } from 'react';
import { ChildHolder, ButtonContainer, PopOverContent } from '../Style/PopoverStyle';

class Popover extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
  }

  componentDidMount() {
    this.handleOnClick();
  }

  handleOnClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  renderChildren = children => (
    <ChildHolder onClick={this.handleOnClick}>
      {children}
    </ChildHolder>
  )

  render() {
    const { isOpen } = this.state;
    const { content, children } = this.props;

    return (
      <ButtonContainer
        tabIndex="0"
        onBlur={this.handleClickOutside}
      >
        {this.renderChildren(children)}
        <If condition={isOpen}>
          <PopOverContent>
            {content}
          </PopOverContent>
        </If>
      </ButtonContainer>
    );
  }
}


type Props = {
  children: React$Node,
  content: React$Node,
};

type State = {
  isOpen: boolean,
};

export default Popover;