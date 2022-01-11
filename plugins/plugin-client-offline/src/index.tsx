/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'

import { version } from '@kui-shell/client/package.json'
import { productName } from '@kui-shell/client/config.d/name.json'

import { Kui, KuiProps, ContextWidgets, Icons, MeterWidgets, SpaceFiller, TextWithIconWidget } from '@kui-shell/plugin-client-common'

/**
 * We will set this bit when the user dismisses the Welcome to Kui
 * tab, so as to avoid opening it again and bothering that user for
 * every new Kui window.
 *
 */
// const welcomeBit = 'plugin-client-default.welcome-was-dismissed'


function Version() {
  return <TextWithIconWidget text={`Guidebooks v${version}`} viewLevel="normal" title={`Guidebooks version ${version}`} />
}

function GithubIcon() {
  return (
    <a
      href="https://github.com/IBM/kui"
      target="#"
      title="Kui Github"
      className="kui--status-stripe-element-clickable kui--status-stripe-element"
    >
      <Icons icon="Github" className="somewhat-larger-text" />
    </a>
  )
}

/**
 * Offline client definition
 */
export default function renderMain(props: KuiProps) {
  return (
    <Kui
      noHelp
      noActiveInput
      productName={productName}
      lightweightTables
      loadingDone={null}
      {...props}
      commandLine={
        props.commandLine || [
          'replay',
          '-r',
          '/kui/playground.md',
          '/kui/iter8.md',
          '/kui/fybrik.md'
        ]
      }
    >
      <ContextWidgets>
        <Version/>
      </ContextWidgets>

      <SpaceFiller/>

      <MeterWidgets>
        <GithubIcon/>
      </MeterWidgets>
    </Kui>
  )
}
