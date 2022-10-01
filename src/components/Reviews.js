import { Star1 } from 'iconsax-react';

const Reviews = ({ value }) => {
    return (
        <span className='rating'>
            <span>
                {value >= 1
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 0.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
            <span>
                {value >= 1
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 0.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
            <span>
                {value >= 2
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 1.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
            <span>
                {value >= 3
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 2.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
            <span>
                {value >= 4
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 3.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
            <span>
                {value >= 5
                        ? <Star1 color="#ffb647" size="14" variant="Bold" />
                        : value >= 4.5
                            ? <Star1 color="#ffb647" size="14" variant="Bulk" />
                            : <Star1 color="#ffb647" size="14" />
                }
            </span>
        </span>
    )
}

export default Reviews