import React, {FC, ReactNode} from 'react';

export type TabProps = {
    title: ReactNode;
    content: ReactNode;
}

/**
 * A single tab which displays it's own content within a <Tabs> component.
 *
 * @param {TabProps} props - tab props
 * @param {ReactNode} props.title - title of the tab
 * @param {ReactNode} props.content - content of the tab
 *
 * @returns {Element} - tab component
 *
 * @example
 * <Tabs.Tab title="example title" content="example content"/>
 */
export const Tab: FC<TabProps> = (props) => {
    return (
        <>
            {props.content}
        </>
    )
}