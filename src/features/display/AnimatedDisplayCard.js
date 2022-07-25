import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => { //{} activates JavaScript
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false); // toggle initial value is false

    const animatedStyle = useSpring({ //need an object as an argument
        opacity: toggle ? 1 : 0, //1 is 100%
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)', // scale(1,1) is 100% width and height
        config: { duration: 500 } // 500 milliseconds or half a second
    });

    useEffect(() => { //side effect we want
        setToggle(true);
    }, []); // empty array to only run once and not on rerenders

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;