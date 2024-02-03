import Markdown from "markdown-to-jsx";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface TextWithCtaProps {
    title: string,
    subtitle: string,
    description: string,
    cta: {
        ctaLabel: string
    }
}

const TextWithCta: FC<TextWithCtaProps> = ({title, subtitle, description, cta}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <Markdown>{description}</Markdown>
            {cta && cta.ctaLabel && <div className={styles.cta}>{cta.ctaLabel}</div>}
        </div>
    )
}

export default TextWithCta;