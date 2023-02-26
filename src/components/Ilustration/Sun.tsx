import { StyledComponentProps } from '@michalspace/types/styled';
import { FC } from 'react';

export const Sun: FC<StyledComponentProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
        <g>
            <path
                d="M15 9.375C11.9004 9.375 9.375 11.9004 9.375 15C9.375 18.0996 11.9004 20.625 15 20.625C18.0996 20.625 20.625 18.0996 20.625 15C20.625 11.9004 18.0996 9.375 15 9.375ZM29.4375 14.0918L23.8887 11.3203L25.8516 5.4375C26.1152 4.64062 25.3594 3.88477 24.5684 4.1543L18.6855 6.11719L15.9082 0.5625C15.5332 -0.1875 14.4668 -0.1875 14.0918 0.5625L11.3203 6.11133L5.43164 4.14844C4.63477 3.88477 3.87891 4.64062 4.14844 5.43164L6.11133 11.3145L0.5625 14.0918C-0.1875 14.4668 -0.1875 15.5332 0.5625 15.9082L6.11133 18.6797L4.14844 24.5684C3.88477 25.3652 4.64062 26.1211 5.43164 25.8516L11.3145 23.8887L14.0859 29.4375C14.4609 30.1875 15.5273 30.1875 15.9023 29.4375L18.6738 23.8887L24.5566 25.8516C25.3535 26.1152 26.1094 25.3594 25.8398 24.5684L23.877 18.6855L29.4258 15.9141C30.1875 15.5332 30.1875 14.4668 29.4375 14.0918ZM20.3027 20.3027C17.3789 23.2266 12.6211 23.2266 9.69727 20.3027C6.77344 17.3789 6.77344 12.6211 9.69727 9.69727C12.6211 6.77344 17.3789 6.77344 20.3027 9.69727C23.2266 12.6211 23.2266 17.3789 20.3027 20.3027Z"
                fill="currentColor"
            />
        </g>
    </svg>
);
