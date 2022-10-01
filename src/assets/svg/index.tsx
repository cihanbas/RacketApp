import React from 'react';
import Star from './star.svg';
import Award from './award.svg';
import Close from './close.svg';
import Rate from './rate.svg';
import StarOutLine from './starOutline.svg';
import StarSolid from './starSolid.svg';

enum IconsEnum {
    star = 'Star',
    award = 'Award',
    close = 'Close',
    rate = 'Rate',
    starOutLine = 'StarOutLine',
    starSolid = 'StarSolid',
}
const icons = {
    Star,
    Award,
    Close,
    Rate,
    StarOutLine,
    StarSolid,
};
interface IconProps {
    size?: number;
    name: IconsEnum;
    fill?: string;
    stroke?: string;
    color?: string;
}
const Icon = ({
    size = 16,
    name = IconsEnum.star,
    fill = 'white',
    stroke = 'transparent',
    color,
}: IconProps) => {
    return React.createElement(icons[name], {
        height: size,
        width: size,
        fill: color ? color : fill,
        stroke: color ? color : stroke,
    });
};
export { Icon }; 
export { IconsEnum }; 
