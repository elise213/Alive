"""empty message

Revision ID: 6a4559321736
Revises: 317a3b618554
Create Date: 2023-03-07 15:04:23.713957

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6a4559321736'
down_revision = '317a3b618554'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('resource_id', sa.Integer(), nullable=True),
    sa.Column('comment_cont', sa.String(length=250), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('parentId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['parentId'], ['Comment.id'], ),
    sa.ForeignKeyConstraint(['resource_id'], ['Resource.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Comment')
    # ### end Alembic commands ###
