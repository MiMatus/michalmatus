import { StyledComponentProps } from '@michalspace/types/styled';
import { FC } from 'react';

export const ElasticSearch: FC<StyledComponentProps> = (props) => (
    //https://commons.wikimedia.org/wiki/File:Elasticsearch_logo.svg
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60" {...props}>
        <path
            d="M42.596 30.926a7.56 7.56 0 0 0-5.003-7.13c.13-.68.195-1.37.195-2.063 0-5.993-4.873-10.866-10.85-10.866-3.508 0-6.757 1.673-8.803 4.5-1.007-.78-2.24-1.202-3.525-1.202a5.77 5.77 0 0 0-5.766 5.766c0 .698.13 1.38.357 2.014-2.99 1.072-5.035 3.947-5.035 7.147a7.58 7.58 0 0 0 5.019 7.147A10.83 10.83 0 0 0 8.99 38.3c0 5.977 4.857 10.834 10.834 10.834a10.8 10.8 0 0 0 8.787-4.515c1.007.796 2.24 1.234 3.525 1.234a5.77 5.77 0 0 0 5.766-5.766c0-.698-.13-1.38-.357-2.014 2.99-1.072 5.05-3.947 5.05-7.147"
            fill="#fff"
        />
        <path
            d="M19.272 27.352l8.414 3.833 8.48-7.44c.13-.617.18-1.218.18-1.868a9.5 9.5 0 0 0-9.486-9.486c-3.135 0-6.042 1.543-7.813 4.126l-1.413 7.325z"
            fill="#fed10a"
        />
        <path
            d="M10.566 36.253c-.13.617-.18 1.25-.18 1.9a9.52 9.52 0 0 0 9.518 9.502 9.51 9.51 0 0 0 7.861-4.158l1.397-7.293-1.868-3.573-8.446-3.85z"
            fill="#24bbb1"
        />
        <path
            d="M10.517 21.7l5.766 1.364 1.267-6.546c-.78-.6-1.754-.926-2.76-.926a4.55 4.55 0 0 0-4.548 4.548c0 .536.097 1.072.276 1.56"
            fill="#ef5098"
        />
        <path
            d="M10.014 23.08c-2.566.845-4.37 3.313-4.37 6.026 0 2.648 1.64 5.003 4.093 5.945l8.09-7.31-1.478-3.167z"
            fill="#17a8e0"
        />
        <path
            d="M29.228 43.497c.796.6 1.754.942 2.745.942a4.55 4.55 0 0 0 4.548-4.548 4.59 4.59 0 0 0-.276-1.576l-5.75-1.348z"
            fill="#93c83e"
        />
        <path
            d="M30.398 35.457l6.335 1.478a6.4 6.4 0 0 0 4.369-6.042c0-2.63-1.64-5.003-4.093-5.93l-8.284 7.26z"
            fill="#0779a1"
        />
        <path
            fill="#58595B"
            d="M57.896 37.748l.763-.08.05 1.56c-2.014.276-3.736.422-5.165.422-1.9 0-3.248-.552-4.044-1.657s-1.186-2.826-1.186-5.15c0-4.645 1.852-6.968 5.54-6.968 1.787 0 3.12.504 3.996 1.494s1.316 2.566 1.316 4.694l-.114 1.51H50.31c0 1.462.26 2.55.796 3.248s1.446 1.056 2.76 1.056a37.35 37.35 0 0 0 4.028-.13zm-.715-5.734c0-1.624-.26-2.777-.78-3.443s-1.364-1.007-2.534-1.007-2.063.357-2.648 1.056-.893 1.835-.9 3.395zm4.743 7.553V22.14h1.982v17.428zm14.505-9.404v6.676c0 .666 1.64.633 1.64.633l-.097 1.754c-1.397 0-2.55.114-3.248-.552a11.64 11.64 0 0 1-4.759.991c-1.218 0-2.144-.34-2.777-1.04-.633-.682-.958-1.673-.958-2.972 0-1.283.325-2.24.975-2.842s1.673-.99 3.07-1.12l4.158-.4v-1.137c0-.893-.195-1.543-.585-1.933s-.926-.585-1.592-.585H67.04V25.89h5.084c1.494 0 2.583.34 3.265 1.04.698.682 1.04 1.77 1.04 3.232zm-8.154 5.393c0 1.624.666 2.436 2.014 2.436a10.6 10.6 0 0 0 3.541-.601l.6-.21V32.8l-3.914.374c-.796.065-1.364.292-1.722.682s-.52.958-.52 1.69zm15.9-7.894c-1.917 0-2.89.666-2.89 2.014 0 .617.227 1.056.666 1.316s1.446.52 3.02.796 2.68.65 3.33 1.153c.65.487.975 1.413.975 2.777s-.44 2.355-1.316 2.99-2.144.958-3.833.958c-1.088 0-4.743-.406-4.743-.406l.114-1.722 4.645.357c1.023 0 1.803-.162 2.34-.487s.812-.877.812-1.64-.227-1.283-.682-1.56-1.462-.536-3.02-.78-2.664-.6-3.313-1.088c-.65-.47-.975-1.364-.975-2.648s.455-2.24 1.364-2.86 2.047-.926 3.395-.926c1.072 0 4.808.276 4.808.276v1.738l-4.694-.26zm14.683.227h-4.207v6.335c0 1.51.114 2.518.325 2.99.227.47.747.715 1.576.715l2.355-.162.13 1.64c-1.186.195-2.08.292-2.696.292-1.38 0-2.323-.34-2.86-1.007s-.796-1.95-.796-3.833v-6.968h-1.884v-1.722h1.884v-4.06h1.965v4.044h4.207zm2.76-3.427v-2.3h1.982v2.306h-1.982zm0 15.106v-13.4h1.982v13.4zm10.6-13.676c.585 0 1.576.114 2.972.325l.633.08-.08 1.608-3.12-.244c-1.494 0-2.518.357-3.054 1.072s-.812 2.047-.812 3.98.244 3.28.747 4.044 1.543 1.137 3.135 1.137l3.12-.244.08 1.64-3.687.374c-2.063 0-3.492-.536-4.272-1.592s-1.186-2.842-1.186-5.36.422-4.288 1.267-5.295c.86-1.007 2.274-1.527 4.256-1.527z"
        />
    </svg>
);