{
    "name": "Mail Filter",
    "version": "18.0.1.0.0",
    "category": "Custom Development",
    "author": "Odoo PS",
    "maintainer": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        "mail",
        "sale_management"
    ],
    "data": [
    ],
    "assets": {
        'web.assets_backend': [
            'mail_filter/static/src/overrides/**/*',
        ]
    }
}
