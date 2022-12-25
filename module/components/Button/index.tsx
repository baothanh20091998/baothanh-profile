import Link from 'next/link'
import React from 'react'
import ButtonBorder from './ButtonBorder';
import ButtonHeader from './ButtonHeader';

interface HeaderBtn {
  type: 'header',
  href: string,
  children: any,
  onPress?: Function
}

interface NormalBtn {
  type: 'bordered' | 'primary',
  children: any,
  href?: string,
  onPress: Function
}

export default function Button({
  href,
  type,
  children,
  onPress = () => { },
  ...props
}: HeaderBtn | NormalBtn) {
  switch (type) {
    case 'header':
      return (
        <ButtonHeader onPress={onPress} {...props} href={href}>
          {children}
        </ButtonHeader>
      )
    case 'bordered':
      return (
        <ButtonBorder {...props} onPress={onPress}>
          {children}
        </ButtonBorder>
      )
    default:
      return
  }
}
