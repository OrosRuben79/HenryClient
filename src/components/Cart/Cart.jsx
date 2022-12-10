import React, { useState } from 'react'

const Cart = () => {
	const [cartDishes, setCartDishes] = useState(JSON.parse(localStorage.getItem("dishes")))

	let total = cartDishes.reduce((sum, curr)=>sum + curr.price, 0)

	const currencyFormat = (num) => num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	
	return (
		<div className='mb-16'>
			<div className="flex mb-4">
				<h5 className="font-bold text-center">
					Carrito de compras
				</h5>
			</div>
			{cartDishes.length === 0 
				?	<div>
					Tu carrito de compras esta vacio 
				</div> :
				cartDishes.map((el, index)=>{
					return(
						<div key={index} className="w-11/12 ml-3 mx-auto px-4 bg-white border rounded-lg shadow-md dark:border-gray-700 mb-3">
							<div className="flow-root">
								<ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0">
												<img className="w-20 h-20" src={el.img} alt={el.name} />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 lowercase first-letter:capitalize">
													{el.name}
												</p>
												<p className="text-sm text-gray-500 truncate">
													Precio unitario ${el.price}
												</p>
											</div>
											<div className="flex flex-col items-center">
												<p className="text-sm font-semibold text-gray-900 truncate">
													Sub-total
												</p>
												${ el.price }
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					)
				})
			}
			<div className='flex justify-end mr-16'>
				Total a pagar = $ {currencyFormat(total)}
			</div>
		</div>
	)
}

export default Cart