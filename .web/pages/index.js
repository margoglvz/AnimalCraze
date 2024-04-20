/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { InfoIcon as LucideInfoIcon, MessagesSquareIcon as LucideMessagesSquareIcon, SlidersHorizontalIcon as LucideSlidersHorizontalIcon, TrashIcon as LucideTrashIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import env from "/env.json"
import { Box, FormControl, VStack } from "@chakra-ui/react"
import { Drawer as VaulDrawer } from "vaul"
import "@radix-ui/themes/styles.css"
import "katex/dist/katex.min.css"
import theme from "/utils/theme.js"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import NextLink from "next/link"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import { SpinningCircles } from "react-loading-icons"
import NextHead from "next/head"



        function ComponentMap_c6edb23544981b05945d32051e1d0e50 () {
            const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>   {children} </RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>   {children} </RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>   {children} </RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>   {children} </RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>   {children} </RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>   {children} </RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>   {children} </RadixThemesText>, "ul": ({node, children, ...props}) => <ul css={{"listStyleType": "disc", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "listStylePosition": "outside", "direction": "column"}}>   {children} </ul>, "ol": ({node, children, ...props}) => <ol css={{"listStyleType": "decimal", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "listStylePosition": "outside", "direction": "column"}}>   {children} </ol>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>   {children} </li>, "a": ({node, children, ...props}) => <RadixThemesLink {...props}>   {children} </RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode {...props}>   {children} </RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((colorMode) === (`light`))) ? oneLight : oneDark} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((colorMode) === (`light`))) ? oneLight : oneDark} children={children} {...props}/>}
            )
        }
        

export function Badge_f3259018840162b8005b95a12e59f3f8 () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <RadixThemesBadge variant={`soft`}>
  {state__state.current_chat}
  <RadixThemesTooltip content={`The current selected chat.`}>
  <LucideInfoIcon css={{"color": "var(--current-color)"}} size={14}/>
</RadixThemesTooltip>
</RadixThemesBadge>
  )
}

export function Fragment_cb5edf864ed730e6ef1545318d0da5a2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Button_eb6166e6683cc43b5be50de948b81296 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_65775bd3c3ca6de4793090251b518aa6 = useCallback((_e) => addEvents([Event("state.state.create_chat", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton onClick={on_click_65775bd3c3ca6de4793090251b518aa6}>
  {`Create chat`}
</RadixThemesButton>
  )
}

export function Link_9e5efdc3279995435a229c6d6a808045 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} size={`3`}>
  <NextLink href={`https://reflex.dev`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"textAlign": "center", "padding": "1em"}} direction={`row`} gap={`2`}>
  {`Built with `}
  <Fragment>
  {isTrue(((colorMode) === (`light`))) ? (
  <Fragment>
  <div dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z\" fill=\"#110F1F\"/>\n<path d=\"M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z\" fill=\"#110F1F\"/>\n<path d=\"M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z\" fill=\"#110F1F\"/>\n<path d=\"M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z\" fill=\"#110F1F\"/>\n<path d=\"M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z\" fill=\"#110F1F\"/>\n<path d=\"M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z\" fill=\"#110F1F\"/>\n</svg>"}}/>
</Fragment>
) : (
  <Fragment>
  <div dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z\" fill=\"white\"/>\n<path d=\"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z\" fill=\"white\"/>\n<path d=\"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z\" fill=\"white\"/>\n<path d=\"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z\" fill=\"white\"/>\n<path d=\"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z\" fill=\"white\"/>\n<path d=\"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z\" fill=\"white\"/>\n</svg>"}}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Box_8b33c98908eb98fc7a872a0b895b0a31 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_158eb4354cf5d41680517fdcbc3221c2 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"question": getRefValue(refs['ref_question'])}}

        addEvents([Event("state.state.process_question", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <Box as={`form`} onSubmit={handleSubmit_158eb4354cf5d41680517fdcbc3221c2}>
  <Formcontrol_297196b5c23a9727e9e5fe8a02860ee0/>
</Box>
  )
}

export function Fragment_6499b51736be44284c15de43340cb16c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_bf8c9408debf08f31b6b0a9121eb34b0 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <RadixThemesFlex align={`start`} css={{"alignItems": "stretch", "width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"color": "var(--mauve-11)"}}>
  {`Chats`}
</RadixThemesHeading>
  <RadixThemesSeparator size={`4`}/>
  {state__state.chat_titles.map((chat, index_8468ece519fb5631706660a0936f4a64) => (
  <VaulDrawer.Close asChild={true} key={index_8468ece519fb5631706660a0936f4a64}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <RadixThemesButton css={{"width": "80%"}} onClick={(_e) => addEvents([Event("state.state.set_chat", {chat_name:chat})], (_e), {})} variant={`surface`}>
  {chat}
</RadixThemesButton>
  <RadixThemesButton color={`red`} css={{"width": "20%"}} variant={`surface`}>
  <LucideTrashIcon css={{"color": "var(--current-color)", "strokeWidth": 1}} onClick={(_e) => addEvents([Event("state.state.delete_chat", {})], (_e), {})}/>
</RadixThemesButton>
</RadixThemesFlex>
</VaulDrawer.Close>
))}
</RadixThemesFlex>
  )
}

export function Formcontrol_297196b5c23a9727e9e5fe8a02860ee0 () {
  const state__state = useContext(StateContexts.state__state)
  const ref_question = useRef(null); refs['ref_question'] = ref_question;



  return (
    <FormControl isDisabled={state__state.processing}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesTextField.Root>
  <RadixThemesTextField.Input css={{"@media screen and (min-width: 0)": {"width": "15em"}, "@media screen and (min-width: 30em)": {"width": "20em"}, "@media screen and (min-width: 48em)": {"width": "45em"}, "@media screen and (min-width: 62em)": {"width": "50em"}, "@media screen and (min-width: 80em)": {"width": "50em"}, "@media screen and (min-width: 96em)": {"width": "50em"}}} id={`question`} placeholder={`Type something...`} ref={ref_question}/>
  <RadixThemesTextField.Slot>
  <RadixThemesTooltip content={`Enter a question to get a response.`}>
  <LucideInfoIcon css={{"color": "var(--current-color)"}} size={18}/>
</RadixThemesTooltip>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
  <RadixThemesButton type={`submit`}>
  <Fragment_ed6b6b0f1e3027e5305177270d418154/>
</RadixThemesButton>
</RadixThemesFlex>
</FormControl>
  )
}

export function Fragment_ed6b6b0f1e3027e5305177270d418154 () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <Fragment>
  {isTrue(state__state.processing) ? (
  <Fragment>
  <SpinningCircles height={`1em`}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Send`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Textfield__input_96362fdc2bc3dc7abb461b80dbb9bc96 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_blur_655009403944aacdde6d38e4aa5f79da = useCallback((_e0) => addEvents([Event("state.state.set_new_chat_name", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])


  return (
    <RadixThemesTextField.Input css={{"@media screen and (min-width: 0)": {"width": "15em"}, "@media screen and (min-width: 30em)": {"width": "20em"}, "@media screen and (min-width: 48em)": {"width": "30em"}, "@media screen and (min-width: 62em)": {"width": "30em"}, "@media screen and (min-width: 80em)": {"width": "30em"}, "@media screen and (min-width: 96em)": {"width": "30em"}}} onBlur={on_blur_655009403944aacdde6d38e4aa5f79da} placeholder={`Type something...`}/>
  )
}

export function Box_4f9f514b992dbdf8f95cc5d706f64124 () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <RadixThemesBox css={{"width": "100%"}}>
  {state__state.chats[state__state.current_chat].map((qa, index_386c822c58c7063a893c264f5cd2a34a) => (
  <RadixThemesBox css={{"width": "100%"}} key={index_386c822c58c7063a893c264f5cd2a34a}>
  <RadixThemesBox css={{"textAlign": "right", "marginTop": "1em"}}>
  <ReactMarkdown css={{"backgroundColor": "var(--mauve-4)", "color": "var(--mauve-12)", "display": "inline-block", "padding": "1em", "borderRadius": "8px", "@media screen and (min-width: 0)": {"maxWidth": "30em"}, "@media screen and (min-width: 30em)": {"maxWidth": "30em"}, "@media screen and (min-width: 48em)": {"maxWidth": "50em"}, "@media screen and (min-width: 62em)": {"maxWidth": "50em"}, "@media screen and (min-width: 80em)": {"maxWidth": "50em"}, "@media screen and (min-width: 96em)": {"maxWidth": "50em"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_c6edb23544981b05945d32051e1d0e50()}>
  {qa.question}
</ReactMarkdown>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left", "paddingTop": "1em"}}>
  <ReactMarkdown css={{"backgroundColor": "var(--accent-4)", "color": "var(--accent-12)", "display": "inline-block", "padding": "1em", "borderRadius": "8px", "@media screen and (min-width: 0)": {"maxWidth": "30em"}, "@media screen and (min-width: 30em)": {"maxWidth": "30em"}, "@media screen and (min-width: 48em)": {"maxWidth": "50em"}, "@media screen and (min-width: 62em)": {"maxWidth": "50em"}, "@media screen and (min-width: 80em)": {"maxWidth": "50em"}, "@media screen and (min-width: 96em)": {"maxWidth": "50em"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_c6edb23544981b05945d32051e1d0e50()}>
  {qa.answer}
</ReactMarkdown>
</RadixThemesBox>
</RadixThemesBox>
))}
</RadixThemesBox>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <VStack alignItems={`stretch`} spacing={`0`} sx={{"backgroundColor": "var(--mauve-1)", "color": "var(--mauve-12)", "minHeight": "100vh"}}>
  <RadixThemesBox css={{"backdropFilter": "auto", "backdropBlur": "lg", "padding": "12px", "borderBottom": "1px solid var(--mauve-3)", "backgroundColor": "var(--mauve-2)", "position": "sticky", "top": "0", "zIndex": "100", "alignItems": "center"}}>
  <RadixThemesFlex align={`start`} css={{"justifyContent": "space-between", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesAvatar fallback={`RC`} variant={`solid`}/>
  <RadixThemesHeading>
  {`Reflex Chat`}
</RadixThemesHeading>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <Badge_f3259018840162b8005b95a12e59f3f8/>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton>
  {`+ New chat`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "var(--mauve-1)", "width": "100%"}} direction={`row`} gap={`2`}>
  <Textfield__input_96362fdc2bc3dc7abb461b80dbb9bc96/>
  <RadixThemesDialog.Close>
  <RadixThemesFlex>
  <Button_eb6166e6683cc43b5be50de948b81296/>
</RadixThemesFlex>
</RadixThemesDialog.Close>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
  <VaulDrawer.Root direction={`left`}>
  <VaulDrawer.Trigger asChild={true}>
  <RadixThemesButton css={{"backgroundColor": "var(--mauve-6)"}}>
  <LucideMessagesSquareIcon css={{"color": "var(--mauve-12)"}}/>
</RadixThemesButton>
</VaulDrawer.Trigger>
  <VaulDrawer.Overlay css={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "top": "0", "z_index": 50, "background": "rgba(0, 0, 0, 0.5)"}}/>
  <VaulDrawer.Portal>
  <RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>
  <VaulDrawer.Content css={{"left": "0", "right": "auto", "bottom": "0", "top": "auto", "position": "fixed", "z_index": 50, "display": "flex", "height": "100%", "width": "20em", "padding": "2em", "backgroundColor": "var(--mauve-2)", "outline": "none"}}>
  <Flex_bf8c9408debf08f31b6b0a9121eb34b0/>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesButton css={{"backgroundColor": "var(--mauve-6)"}}>
  <LucideSlidersHorizontalIcon css={{"color": "var(--mauve-12)"}}/>
</RadixThemesButton>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"py": "8", "flex": "1", "width": "100%", "maxWidth": "50em", "paddingInlineStart": "4px", "paddingInlineEnd": "4px", "alignSelf": "center", "overflow": "hidden", "paddingBottom": "5em"}} direction={`column`} gap={`2`}>
  <Box_4f9f514b992dbdf8f95cc5d706f64124/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"position": "sticky", "bottom": "0", "left": "0", "paddingTop": "16px", "paddingBottom": "16px", "backdropFilter": "auto", "backdropBlur": "lg", "borderTop": "1px solid var(--mauve-3)", "backgroundColor": "var(--mauve-2)", "alignItems": "center", "width": "100%", "display": "flex", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <Box_8b33c98908eb98fc7a872a0b895b0a31/>
  <RadixThemesText as={`p`} css={{"textAlign": "center", "fontSize": ".75em", "color": "var(--mauve-10)"}}>
  {`ReflexGPT may return factually incorrect or misleading responses. Use discretion.`}
</RadixThemesText>
  <RadixThemesFlex css={{"width": "100%", "marginTop": "-1em", "marginBottom": "-1em", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <Link_9e5efdc3279995435a229c6d6a808045/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</VStack>
  <NextHead>
  <title>
  {`Chat | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
