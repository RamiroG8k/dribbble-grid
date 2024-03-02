import { useEffect, type FC, type ReactElement, useState, useRef } from 'react';

type DepthControlProps = {
    threshold: number;
};

const DepthControl: FC<DepthControlProps> = ({ threshold = 0 }): ReactElement => {
    if (threshold < 0 || threshold > 1) {
        throw new Error('Threshold value must be between 0 and 1');
    }

    const [visible, setVisible] = useState(true);
    const totalPageHeightRef = useRef<number>(0);

    const watchScroll = () => {
        const scrollPoint = window.scrollY + window.innerHeight;

        if (scrollPoint >= totalPageHeightRef.current - (totalPageHeightRef.current * threshold)) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    useEffect(() => {
        if (!totalPageHeightRef.current) {
            totalPageHeightRef.current = document.body.scrollHeight;
            watchScroll();
        }

        window.addEventListener('scroll', watchScroll);
        return () => window.removeEventListener('scroll', watchScroll);
    }, []);

    return (
        <div className={`${visible ? 'block' : 'hidden'} fixed w-full left-0 right-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background-dark/30 z-50`} />
    );
};

export default DepthControl;
