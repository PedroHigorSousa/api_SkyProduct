const mongoose = require('mongoose');
const { request, response } = require('express');

const Product = mongoose.model('Product');

module.exports = {
    async index(request, response) {
        const products = await Product.find();

        return response.json(products);
    },

    async show(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },

    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    },

    async update(request, response) {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(product);
    },

    async destroy(request, response) {
        try {
            await Product.findByIdAndRemove(request.params.id);

            return response.send();
        } catch (error) {
            console.warn(error);
        }
    },
}