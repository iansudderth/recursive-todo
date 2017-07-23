import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/todo/new' prefetch><a>Todo List App</a></Link></li>
  </ul>
)
